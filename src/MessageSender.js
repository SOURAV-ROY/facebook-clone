import React from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar/>
                <form>

                    <input
                        className="messageSender_input"
                        placeholder={"What's On your Mind"}
                    />

                    <input
                        placeholder="image URL (Optional)"
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >Hidden Submit
                    </button>

                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
