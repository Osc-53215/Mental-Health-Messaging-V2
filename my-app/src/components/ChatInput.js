import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import './ChatInput.css';
import firebase from 'firebase';
import { db } from '../firebase';

function Chat({channelName, channelId}) {
    const [input, setInput] = useState('')

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Elizandra Sandoval',
            userImage: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/170122139_4045199688874900_4382704728184763151_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1IMzvLGdYLMAX_P97qi&_nc_ht=scontent-ort2-2.xx&oh=ba77bd6732768b076fda497ddf1123ff&oe=60E68777'
        });

        setInput('')

    }

    return (
        <div className = 'chat__input'>
            <form>
                <input 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder = {`Message #${channelName}`}/>

                <Button hidden type = 'submit' onClick = {sendMessage}>
                    SEND
                </Button>

            </form>
        </div>
    )
}

export default Chat
