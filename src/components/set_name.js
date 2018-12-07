import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';


class SetName extends Component{
    setName = ({name}) =>{
        // save the name in local storage
        console.log(name);
        localStorage.setItem('chat_name',name);
        // redirects you to the chat 
        this.props.history.push("/chat");
        // remeber local storage is just always on that computer and be careful of what you're storing
    }
    render(){
        const{handleSubmit} = this.props;

        return(
            <div>
                <h1 className="center">Set Name</h1>
                <form onSubmit={handleSubmit(this.setName)}>
                    <div className="row">
                        <Field name ="name" size="s12 m8 offset-m2" label="Name" component={Input}/>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({name}){
    if(!name) return {name: 'Please enter a name'}

    return{};
}

export default reduxForm({
    form: 'set-name',
    validate,
    initialValues:{
        name: localStorage.getItem('chat_name' || '')
    },
})(SetName);