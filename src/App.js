import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";

import {useStateValue} from "./StateProvider/StateProvider";

function App() {

    // const user = null;
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">

            {!user ?
                (<Login/>) : (
                    <>
                        <Header/>
                        <div className="app_body">
                            <Sidebar/>
                            <Feed/>
                            <Widgets/>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default App;
