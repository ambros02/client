import React from "react";
import BaseContainer from "./BaseContainer";


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


export default userDisplay;