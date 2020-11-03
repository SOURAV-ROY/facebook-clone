import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                title="React"
                // src="https://reactjs-tech-store.netlify.app"
                src="https://burger-banai.web.app"
                width="340"
                height="100%"
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
