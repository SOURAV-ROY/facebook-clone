import React from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';

function Login() {
    const signIn = () => {

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
