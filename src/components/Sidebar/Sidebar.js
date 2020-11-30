import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideOption from "../SideOption/SideOption";
import InserCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../../firebase";
import { useStateValue } from '../../StateProvider';


function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        // run this code once
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    name: doc.data().name
                }
            )))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {state.user.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SideOption Icon={InserCommentIcon} title="Threads" />
            <SideOption Icon={InboxIcon} title="Mentions & reactions" />
            <SideOption Icon={DraftsIcon} title="Saved items" />
            <SideOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SideOption Icon={PeopleAltIcon} title="People & user groups" />
            <SideOption Icon={AppsIcon} title="Apps" />
            <SideOption Icon={FileCopyIcon} title="File browser" />
            <SideOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SideOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SideOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {
                channels.map(channel => (
                    <SideOption title={channel.name} id={channel.id} />
                ))
            }
            {/*Connect to dB */}

        </div>
    )
}

export default Sidebar
