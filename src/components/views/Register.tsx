import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {api, handleError} from "helpers/api";
import User from "models/User";
import BaseLogin from "./BaseLoginInfo";
import {Button} from "../ui/Button";



export default function Register(props){

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function moveToLogin(){
        navigate("/login");
    }

    async function doRegister(){
        try {
            let name = password;
            const requestBody = JSON.stringify({ name,username });
            const response = await api.post("/users", requestBody);

            // Get the returned user and update a new object.
            const user = new User(response.data);

            // Store the token into the local storage.
            localStorage.setItem("token", user.token);

            // Register successfully worked --> navigate to the route /game in the GameRouter
            navigate("/game");
        } catch (error) {
            alert(
                `Something went wrong during the login: \n${handleError(error)}`
            );
        }

    }
    return (
        <>
            <div className="login button-container">
                <Button onClick={moveToLogin}>login instead</Button>
            </div>
            <BaseLogin
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                doAction={doRegister}
                buttonName="register"
            />
        </>
    )


}