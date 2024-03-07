import React from "react";
import BaseContainer from "./BaseContainer";
import PropTypes from "prop-types";


function UserDisplay(props) {


    return (
        <BaseContainer>

            {props.name ? <div>Hello {props.name} welcome back</div> : null}
            <div>`ID: ${props.id}`</div>
            <div>`Username: ${props.username}`</div>
            <div>`Creation date: ${props.creationTime}`</div>
            <div>`ID ${props.id}`</div>
            <div>`ID ${props.id}`</div>

        </BaseContainer>
    )

}

UserDisplay.propTypes = {
    name: PropTypes.string,
    id: PropTypes.long,
    username: PropTypes.string,
    creationTime: PropTypes.string,
}

export default userDisplay;