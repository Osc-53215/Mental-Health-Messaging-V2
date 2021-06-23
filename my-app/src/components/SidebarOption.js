import React from 'react';
import { db } from '../firebase';
import './SidebarOption.css';

function SidebarOption({Icon, title, addChannelOption}) {

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {

    }



    return (
        <div className = 'sidebaroption' 
        onClick = {addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize = 'small' style = {{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <div className = 'sidebaroption__channel'>
                    <span>#</span> {title}
                </div>
            )}
        </div>
    )
}

export default SidebarOption
