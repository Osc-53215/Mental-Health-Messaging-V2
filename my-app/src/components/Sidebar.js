import React from 'react';
import './Sidebar.css';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreatIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PoepleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [channels] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth);

    return (
        <div className = 'sidebar'>

            <div className = 'sidebar__header'>
                <div className = 'sidebar__info'>
                    <h2>MH-Chat</h2>
                    <h3>
                        <FiberManualRecordIcon/> 
                        {user.displayName}
                    </h3>              
                </div>
                <CreatIcon />
            </div>  

            <SidebarOption Icon = {InsertCommentIcon} title = 'Threads' />
            <SidebarOption Icon = {InboxIcon} title = 'Mentions & reactions' />
            <SidebarOption Icon = {DraftsIcon} title = 'Saved items' />
            <SidebarOption Icon = {BookmarkBorderIcon} title = 'Channel browser' />
            <SidebarOption Icon = {PoepleAltIcon} title = 'People & user groups' />
            <SidebarOption Icon = {AppsIcon} title = 'Apps' />
            <SidebarOption Icon = {FileCopyIcon} title = 'File browser' />
            <SidebarOption Icon = {ExpandLessIcon} title = 'Show less' />
            <hr />
            <SidebarOption Icon = {ExpandMoreIcon} title = 'Channels' />
            <hr />
            <SidebarOption Icon = {AddIcon} addChannelOption title = 'Add Channels' />

            {channels?.docs.map(doc => (
                <SidebarOption 
                key = {doc.id} 
                id = {doc.id}
                title = {doc.data().name} />
            ))}
        </div>
    )
}

export default Sidebar
