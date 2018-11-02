import React, { Component } from 'react';
import './todoItem.css';
import moment from 'moment';

class TodoItem extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
        }
    }

    handleEditTitle = () => {
        this.setState({
            isEdit: true
        })
    }

    handleSubmitTitle = () => {
        this.props.updateItem(
            this.props.token, 
            {
                _id: this.props.id,
                title: this.input.value.trim()
            }
        )

        this.setState({
            isEdit: false
        })
    }

    handleCheck = () => {
        console.log('DIFF', this.props.wallet)
        this.props.updateItem(
            this.props.token, 
            {
                _id: this.props.id,
                completed: !this.props.completed
            }
        )

        this.setState({
            isEdit: false
        })
    }

    handleUpdateWallet = (wager) => {
        this.props.updateWallet(this.props.token, wager, true);
    }

    handleDelete = () => {
        let wager = this.props.wager;
        this.handleUpdateWallet(wager);
        this.props.deleteItem(this.props.token, {_id: this.props.id})
    }

    renderTitle = () => {
        return this.state.isEdit
            ?   <input
                    ref={input => this.input = input}
                    className="edit-title"
                    type="text"
                    defaultValue={this.props.title}
                    onBlur={this.handleSubmitTitle}
                    autoFocus
                />
            :   <p 
                    className={this.props.completed ? "title-crossed" : "title"}
                    onDoubleClick={this.props.completed ? null : this.handleEditTitle}>
                        {this.props.title}
                </p>
    }

    renderCheckIcon = () => {
        return this.props.completed
            ? <i className="fas fa-check check-icon"></i>
            : null
    }

    render() {
        // console.log(this);
        return (
            <div className="item-container">
                <div className="completed-check-box" onClick={this.handleCheck}>
                    {this.renderCheckIcon()}
                </div>
                <div className="title-container">
                    {this.renderTitle()}
                </div>
                <div><em>{moment(this.props.dueDate).calendar()}</em></div>
                <div>${this.props.wager}</div>
                <div className="delete-btn" onClick={this.handleDelete}>
                    <i className="fas fa-times delete-icon"></i>
                </div>
            </div>
        )
    }
}

export default TodoItem;