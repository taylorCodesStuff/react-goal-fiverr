import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

import Profile from './components/Profile';
import LogIn from './components/LogIn';
import Callback from './components/Callback';
import Todo from './components/Todo';
import { loadSession } from './actions/authActions';
import { joinRoomSuccess } from './actions/socketActions';
import { APP_SERVER_URL } from './config';
import { initSubscriber } from './subscriber-client';
import {
  ELECTRON_APP_MAC_DOWNLOAD_URL,
  ELECTRON_APP_WIN_DOWNLOAD_URL } from './config';

import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const socket = io(APP_SERVER_URL);

class App extends Component {

  constructor(props) {
    super(props);

    props.loadSession();
  }

  componentDidMount() {
    initSubscriber(socket);
  }

  componentDidUpdate() {
    this.onSocketConnect();
  }

  render() {
    return (
      <Router>
        <div className="App">
          
          <main>
            <div className="container-fluid">
              <Route exact path="/" render={() => this.props.isAuthenticated ? <Todo /> : <Redirect to='/login' />} />
              <Route exact path="/profile" render={() => this.props.isAuthenticated ? <Profile /> : <Redirect to='/login' />} />
              <Route exact path="/login" render={() => !this.props.isAuthenticated ? <LogIn /> : <Redirect to='/' />} />
              <Route exact path="/callback" component={Callback} />
            </div>
          </main>
          
        </div>
      </Router>
    );
  }

  onSocketConnect = () => {
    if (
      this.props.socketConnected
      && this.props.user_id
      && !this.props.roomJoined ) {
        socket.emit('room', this.props.user_id);
        this.props.joinRoomSuccess();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:
      new Date().getTime() <
      (state.authReducer.sessionItems ? state.authReducer.sessionItems.expiresAt : null),
    user_id: state.userReducer.profile.sub,
    socketConnected: state.socketReducer.connectSuccess,
    roomJoined: state.socketReducer.joinRoomSuccess
  }
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    loadSession,
    joinRoomSuccess
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);