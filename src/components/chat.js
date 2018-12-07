import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllMessages, sendMessage} from '../actions';
import {Field, reduxForm} from 'redux-form';
import Input from './input';

class Chat extends Component{
    componentDidMount(){
        if(!localStorage.getItem('chat_name')){
            return this.props.history.push('/set-name');
        }
        this.dbRef = this.props.getAllMessages();
    }
    // cleans up your listeners . If you dont clean this up you wil end up with a bunch of different listeners
    // it removes the listener from the database
    componentWillUnmount(){
        if(this.dbRef){
            this.dbRef.off();
        }
    }
    handleSendMessage = async ({message}) =>{
        await this.props.sendMessage(message)
        this.props.reset();
    }
    render(){
        const {messages, handleSubmit} = this.props;
        const messageElements = Object.keys(messages).map(key=>{
            const msg = messages[key];
            return  <li key={key}className="collection-item">
                        <b>{msg.name}: </b>{msg.message}
                    </li>
        });
        return(
            <div>
                <div className="right-align grey-text">Logged in as: {localStorage.getItem('chat_name')}</div>
                <h1 className="center">Chat room</h1>
                <ul className="collection">
                    {messageElements}
                </ul>
                <form onSubmit = {handleSubmit(this.handleSendMessage)}>
                    <div className="row">
                        <Field name="message" label="Message" component={Input}/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        messages: state.chat.messages
    }
}

const validate = ({message}) => message ? { } : {message: 'please enter a message'};

export default reduxForm({
    form: 'new-message',
    validate
})(connect(mapStateToProps, {
    getAllMessages,
    sendMessage
})(Chat));