import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import  AccessTimeIcon  from '@material-ui/icons/AccessTime';

function Header() {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <div className = 'header__avatar'>
                    <Avatar />
                </div>

                    <AccessTimeIcon />
            </div>

            <div className = 'header__middle'>

            </div>

            <div className = 'header__right'>

            </div>

        </div>
    )
}

export default Header
