import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
    return (
        <div className = 'sidebar__option'>
            {Icon && <Icon fontSize = 'small' style = {{padding: 10}} />}
        </div>
    )
}

export default SidebarOption
