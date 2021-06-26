import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import  AccessTimeIcon  from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'

function Header() {
    const [user] = useAuthState(auth);

    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <div className = 'header__avatar'>
                    <Avatar 
                    onClick = {() => auth.signOut()}
                    atl = {user?.displayName} 
                    src = {user?.photoUrl}/>
                </div>

                    <AccessTimeIcon />
            </div>

            <div className = 'header__search'>
                <SearchIcon />
                <input placeholder = 'Search'/>

            </div>

            <div className = 'header__right'>
                <HelpOutlineIcon />
            </div>

        </div>
    )
}

export default Header
