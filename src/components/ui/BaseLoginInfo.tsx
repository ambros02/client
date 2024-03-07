import React from "react";
import {Button} from "./Button";
import BaseContainer from "./BaseContainer";
import PropTypes from "prop-types";
import {Form} from "react-router-dom";

export const FormField = (props) => {
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

export default function BaseLogin(props){
    return(
        <BaseContainer>
            <div className="login container">
                <div className="login form">
                    <FormField
                        label="name"
                        value={props.name}
                        onChange={(un:String) => props.setName(un)}
                    />
                    <FormField
                        label="Username"
                        value={props.username}
                        onChange={(un: string) => props.setUsername(un)}
                    />
                    <FormField
                        label="Password"
                        value={props.password}
                        onChange={(n) => props.setPassword(n)}
                    />
                    <div className="login button-container">
                        <Button
                            disabled={!props.username || !props.password}
                            width="100%"
                            onClick={() => props.doAction()}
                        >
                            {props.buttonName}
                        </Button>
                    </div>
                </div>
            </div>
        </BaseContainer>
        )


}
BaseLogin.propTypes = {
    name : PropTypes.String,
    setName : PropTypes.func,
    username : PropTypes.String,
    setUsername : PropTypes.func,
    password : PropTypes.String,
    setPassword : PropTypes.func,
    doAction : PropTypes.func,
    buttonName : PropTypes.String,
};

