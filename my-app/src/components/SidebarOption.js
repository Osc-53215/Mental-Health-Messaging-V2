import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title, addChannelOption}) {

    const addChannel = () => {
        
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
