import types from './types'
import {db} from '../firebase';

export function getAllMessages() {
    return function (dispatch){
        // we are creating a reference to that database so we can access it in the component
        const dbRef = db.ref('/messages')
        db.ref('/messages').on('value', (snapshot) => {
            dispatch({
                type: types.GET_CHAT_MESSAGES,
                messages: snapshot.val()
            });
        });
        return dbRef;
    }
}

export const sendMessage = (msg) => async dispatch =>{
    return db.ref("/messages").push({
        message: msg,
        name: localStorage.getItem('chat_name')
    })
}

