import  InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import './Chat.css';
import ChatInput from './ChatInput';
import Message from './Message'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const[roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && 
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({behavior: 'smooth'});
    }, [roomId, loading]);

    return (
        <div className = 'chat'>

            <div className = 'chat__header'>

                <div className = 'chat__headerleft'>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
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
                {roomMessages?.docs.map(doc => {
                    const {message, timestamp, user, userImage} = doc.data();

                    return (
                        <Message
                            key = {doc.id}
                            message = {message}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    )
                })}
                <div className = 'chat__bottom' ref = {chatRef}> </div>
            </div>
            
                <ChatInput 
                chatRef = {chatRef}
                channelName = {roomDetails?.data().name}
                channelId = {roomId}
                />

        </div>
    )
}

export default Chat
