import React from 'react'

function Chat({channelName, channelId}) {
    return (
        <div className = 'chat__input'>
            <form>
                <input
                placeholder = {`Message #ROOM`}
                />
            </form>
        </div>
    )
}

export default Chat
