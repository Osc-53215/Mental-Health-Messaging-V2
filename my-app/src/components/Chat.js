import  InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import './Chat.css';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Chat() {
    const roomId = useSelector(selectRoomId);
    const[roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && 
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    )

    return (
        <div className = 'chat'>

            <div className = 'chat__header'>

                <div className = 'chat__headerleft'>
                    <h4>
                        <strong>#Room-name</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>

                <div className = 'chat__headerright'>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className = 'chatmessages'>
                <ChatInput 
                channelName = {roomDetails?.data().name}
                channelId = {roomId}
                />
            </div>

        </div>
    )
}

export default Chat
