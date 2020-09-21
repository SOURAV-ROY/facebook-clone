import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
// import {ExpandMoreOutlined} from "@material-ui/icons";

function Sidebar() {

    return (
        <div className="sidebar">
            <SidebarRow
                src="https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"
                title="SOURAV"
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVIT-19 Information Center"/>
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SidebarRow
                Icon={PeopleIcon}
                title="Friends"
            />
            <SidebarRow
                Icon={ChatIcon}
                title="Messenger"
            />
            <SidebarRow
                Icon={StorefrontIcon}
                title="Marketplace"
            />
            <SidebarRow
                Icon={VideoLibraryIcon}
                title="Videos"
            />
            <SidebarRow
                Icon={ExpandMoreOutlinedIcon}
                title="More"
            />
        </div>
    );
}

export default Sidebar;
