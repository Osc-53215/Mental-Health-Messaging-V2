import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <div className = 'header__avatar'>
                    <Avatar />
                </div>

            </div>

            <div className = 'header__middle'>

            </div>

            <div className = 'header__right'>

            </div>

        </div>
    )
}

export default Header
