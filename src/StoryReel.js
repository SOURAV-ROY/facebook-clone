import React from 'react';
import "./StoryReel.css";
import Story from "./Story";
import {useStateValue} from "./StateProvider";

function StoryReel() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="storyReel">

            {/*Story*/}
            <Story
                image={user.photoURL}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={user.photoURL}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={user.photoURL}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={user.photoURL}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={user.photoURL}
                profileSrc={user.photoURL}
                title={user.displayName}
            />

        </div>
    );
}

export default StoryReel;
