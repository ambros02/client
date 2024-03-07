import React, {useState} from "react";
import {api, handleError} from "helpers/api";
import {useNavigate} from "react-router-dom";
import {Button} from "components/ui/Button";
import "styles/views/Login.scss";
import PropTypes from "prop-types";
import BaseLogin from "../ui/BaseLoginInfo";

/*
It is possible to add multiple components inside a single file,
however be sure not to clutter your files with an endless amount!
As a rule of thumb, use one file per component and only add small,
specific components that belong to the main one in the same file.
 */
const FormField = (props) => {
    return (
        <div className="login field">
            <label className="login label">{props.label}</label>
            <input
                className="login input"
                placeholder="enter here.."
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    function moveToRegister() {
        navigate("/register");
    }

    const doLogin = async () => {
        try {
            const requestBody = JSON.stringify({username, name, password});
            const response = await api.patch("/users/login", requestBody);
            const result = response.data;

            //check if username exists -> why this way check out
            if (!result.usernameExists) {
                alert("the username does not exist");
            } else if (!result.passwordCorrect) {
                alert("wrong password");
            } else {
                localStorage.setItem("id", result.id);
                localStorage.setItem("token", result.token);
                navigate("/game");
            }


        } catch (error) {
            alert(
                `Something went wrong during the login: \n${handleError(error)}`
            );
        }
    };

    return (
        <>
            <div className="login button-container">
                <Button onClick={moveToRegister}>register instead</Button>
            </div>
            <BaseLogin
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                doAction={doLogin}
                buttonName="login"
            />
        </>

    )
};

/**
 * You can get access to the history object's properties via the useLocation, useNavigate, useParams, ... hooks.
 */
export default Login;
