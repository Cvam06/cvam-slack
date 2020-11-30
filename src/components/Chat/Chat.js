import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";
import db from '../../firebase';
import Message from '../Message/Message';
import ChatInput from "../ChatInput/ChatInput";
import { DesktopWindowsRounded } from '@material-ui/icons';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId)
            .collection('messages').orderBy('timestamp', 'asc').onSnapshot(
                snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data()))
            )


    }, [roomId]);

    useEffect(() => {
        var ele = document.getElementById("chat__messages");
        ele.scrollTop = 100;

    }, [roomMessages])





    console.log(">>>" + JSON.stringify(roomMessages));
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name} </strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages" id="chat__messages">
                {
                    roomMessages?.map(({ message, timestamp, userimage, user }) => (
                        <Message
                            message={message}
                            timestamp={timestamp}
                            userimage={userimage}
                            user={user}
                        />
                    ))
                }

            </div>

            <ChatInput className="chat__chatInput" channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
