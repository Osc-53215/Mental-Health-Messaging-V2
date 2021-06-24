import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import React from 'react'
import './Chat.css'

function Chat() {
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

                </div>
            </div>

        </div>
    )
}

export default Chat
