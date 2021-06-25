import React from 'react';
import { Button } from '@material-ui/core';
import './ChatInput.css'

function Chat({channelName, channelId}) {

    const sendMessage = e => {
        e.preventDefault();
    }

    return (
        <div className = 'chat__input'>
            <form>
                <input placeholder = {`Message #ROOM`}/>

                <Button hidden type = 'submit' onClick = {sendMessage}>
                    SEND
                </Button>

            </form>
        </div>
    )
}

export default Chat
