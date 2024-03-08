import React from "react";
import {Button} from "./Button";
import BaseContainer from "./BaseContainer";
import PropTypes from "prop-types";


export const FormField = (props) => {
    return (
        <div className="login field">
            <label className="login label">{props.label}</label>
            <input
                type={props.type}
                className="login input"
                placeholder="enter here.."
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
};


FormField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default function BaseLogin(props) {
    return (
        <BaseContainer>
            <div className="login container">
                <div className="login form">
                    <FormField
                        label="name"
                        value={props.name}
                        onChange={(un: String) => props.setName(un)}
                    />
                    <FormField
                        label="Username"
                        value={props.username}
                        onChange={(un: string) => props.setUsername(un)}
                    />
                    <FormField
                        type="password"
                        label="Password"
                        value={props.password}
                        onChange={(n) => props.setPassword(n)}
                    />
                    <p>{props.message}</p>
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
    name: PropTypes.String,
    setName: PropTypes.func,
    username: PropTypes.String,
    setUsername: PropTypes.func,
    password: PropTypes.String,
    setPassword: PropTypes.func,
    doAction: PropTypes.func,
    buttonName: PropTypes.String,
    message: PropTypes.String,
};

