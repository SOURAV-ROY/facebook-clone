import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                title="React"
                src="https://reactjs-tech-store.netlify.app"
                width="340"
                height="1080px"
                style={{border: "none", overflow: "hidden"}}
                scrolling="yes"
                frameBorder="0"
                // allowTransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    );
}

export default Widgets;
