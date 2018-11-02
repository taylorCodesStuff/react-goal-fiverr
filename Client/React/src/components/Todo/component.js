import React, { Component } from 'react';
import './todo.css';
import { REACT_UNIVERSAL_REPO_URL } from '../../config';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from '../TodoItem';
import Header from '../Header';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            dueDate: '',
            goal: '',
            wager: 0
        };
    }

    componentDidMount() {
        this.props.getItems(this.props.token);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.props.token, {title: this.input.value.trim(), dueDate: this.state.dueDate, wager: this.state.wager});
        this.input.value = ''
        this.props.updateWallet(this.props.token, this.state.wager, false);
    }

    renderTodos = () => {
        const items = this.props.items.map(item => (
            <div key={item._id}>
                <TodoItem id={item._id} title={item.title} completed={item.completed} dueDate={item.dueDate} wager={item.wager} wallet={this.props.wallet} />
            </div>
        ))
        return items;
    }

    render() {
        console.log(this);
        return (
            <div>
                <Header />
                <h1 class="site-header">Goals-Fiverr</h1>
                <p className="app-description">
                    Accomplish your goals, or pay the price!
                </p>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                id="input-title"
                                className="input-title"
                                type="text"
                                autoComplete="off"
                                ref={input => {this.input = input}}
                                placeholder="Add a Goal..."/>
                        </div>
                        <div>
                            <input
                                className="form-control"
                                type="datetime-local"
                                // onChange={event => console.log(event.target.value)}
                                onChange={event => this.setState({dueDate: event.target.value})}
                                />
                        </div>
                        Enter Wager:  
                        ${this.state.wager}
                        <div>
                            {/* <input type="range" max="20" min="0" step="1" 
                                onChange={(e) => this.setState({wager: Number(e.target.value)})}
                            /> */}
                            
                        </div>
                    </form>
                    <div>
                        {/* Purse: <output>{this.state.wallet}</output> */}
                        Wallet: $<output>{this.props.wallet}</output>
                    </div>
                    <div className="todo-container">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {this.renderTodos()}
                    </ReactCSSTransitionGroup>
                    </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Todo;