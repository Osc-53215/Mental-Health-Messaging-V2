import React from 'react';
import './Sidebar.css';
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
            <SidebarOption Icon = {AddIcon} title = 'Add Channels' />

        </div>
    )
}

export default Sidebar
