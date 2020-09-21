import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            {/*Story*/}
            <Story
                image="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                profileSrc="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="Sourav"
            />
            <Story
                image="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                profileSrc="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="Gaurab"
            />
            <Story
                image="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                profileSrc="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="Roy"
            />
            <Story
                image="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                profileSrc="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="Chandra"
            />
            <Story
                image="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                profileSrc="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="Roy Sourav"
            />
        </div>
    );
}

export default StoryReel;
