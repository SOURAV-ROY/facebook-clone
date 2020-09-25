import React from 'react';
import "./StoryReel.css";
import Story from "../Story/Story";
import {useStateValue} from "../StateProvider/StateProvider";

function StoryReel() {

    // eslint-disable-next-line
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
