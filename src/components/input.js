import React from 'react';
import { SSL_OP_NO_TLSv1_2 } from 'constants';

export default ({input,label, size ='s12',  meta:{error, touched}}) => (
    <div className ={`input-field col ${size}`}>
        <input id ={input.name} {...input} type="text" autoComplete="off"/>
        <label htmlFor ={input.name}>{label}</label>
        <p className="red-text">{touched && error}</p>
    </div>
)