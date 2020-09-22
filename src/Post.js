import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic}/>
                <div className="post_avatar">
                    <div className="post_topInfo">
                        <h3>{username}</h3>
                        <p>Timestamp....</p>
                    </div>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default Post;
