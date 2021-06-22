import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreatIcon from '@material-ui/icons/Create'

function Sidebar() {
    return (
        <div className = 'sidebar'>

            <div className = 'sidebar__header'>
                <div className = 'sidebar__info'>
                    <h2>MH-Chat</h2>
                    <h3>
                        <FiberManualRecordIcon/> 
                        Elizandra Sandoval
                    </h3>              
                </div>
                <CreatIcon />
            </div>  

        </div>
    )
}

export default Sidebar
