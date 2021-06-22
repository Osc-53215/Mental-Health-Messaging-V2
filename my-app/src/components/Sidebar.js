import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
    return (
        <div className = 'sidebar'>

            <div className = 'sidebar__header'>
                <div className = 'sidebar__info'>
                    <h2>This is the header</h2>
                </div>

                <div className = 'sidebar__info'>
                    <FiberManualRecordIcon/> 
                    <h3>Elizandra Sandoval</h3>              
                </div>
            </div>  

        </div>
    )
}

export default Sidebar
