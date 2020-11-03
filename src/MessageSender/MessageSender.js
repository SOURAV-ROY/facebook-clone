import React, {useState} from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {useStateValue} from "../StateProvider/StateProvider";
import db from "../Firebase/firebase";
import firebase from "firebase";

function MessageSender() {

    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        }).then(res => console.log(res))
            .catch(error => alert(error))

        //    some clever DB
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>

                    <input
                        value={input}
                        onChange={
                            (e) => setInput(e.target.value)
                        }
                        className="messageSender_input"
                        placeholder={`What's On Your Mind ${user.displayName}💚?`}
                    />

                    <input
                        value={imageUrl}
                        onChange={
                            e => setImageUrl(e.target.value)
                        }
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
