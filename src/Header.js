import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {

    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                    alt="Facebook"/>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header_middle">

            </div>
            <div className="header_right">

            </div>
        </div>
    );
}

export default Header;
