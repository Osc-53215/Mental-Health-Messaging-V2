import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import './ChatInput.css';
import firebase from 'firebase';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat({channelName, channelId, chatRef}) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef?.current?.scrollIntoView({behavior: 'smooth'});

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
