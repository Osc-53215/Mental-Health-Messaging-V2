import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title, addChannelOption}) {
    return (
        <div className = 'sidebaroption'>
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
