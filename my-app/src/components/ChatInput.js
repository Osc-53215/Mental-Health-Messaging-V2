import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import './ChatInput.css';
import firebase from 'firebase';
import { db } from '../firebase';

function Chat({channelName, channelId}) {
    const [input, setInput] = useState('')

    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            return false;
        }

        db.collections('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

    }

    return (
        <div className = 'chat__input'>
            <form>
                <input 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder = {`Message #ROOM`}/>

                <Button hidden type = 'submit' onClick = {sendMessage}>
                    SEND
                </Button>

            </form>
        </div>
    )
}

export default Chat
