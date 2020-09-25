import React from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';

import {auth, provider} from "../Firebase/firebase";
import {useStateValue} from "../StateProvider/StateProvider";
import {actionTypes} from "../StateProvider/reducer";

function Login() {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Sign In ******************************************************
        auth.signInWithPopup(provider)
            .then(result => {

                //Console Log ******************************
                console.log(result)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

                // Console Log ******************************
                console.log(result.user)

            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""/>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Facebook%2C_Inc._Logo_2019.svg/1920px-Facebook%2C_Inc._Logo_2019.svg.png"
                    alt="" style={{width: "300px"}}/>
            </div>
            <Button
                type="submit"
                onClick={signIn}
            >
                Sign In
            </Button>

        </div>
    );
}

export default Login;
