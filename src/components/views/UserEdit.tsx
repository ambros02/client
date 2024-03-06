import { Button } from "components/ui/Button";
import React, {useState} from "react";
import BaseContainer from "../ui/BaseContainer";
import { api } from "helpers/api";
import {useNavigate} from "react-router-dom";
import {User} from "../../types";





export default function UserEdit() {
    let userId = parseInt(sessionStorage.getItem("id"));
    const [id,setId] = useState(null);
    const [username,setUsername] = useState(null);
    const [birthday,setBirthday] = useState(null);
    const [creationDate,setCreationDate] = useState(null);
    const [status,setStatus] = useState(null);

    async function fetchData(id){
        let response = await api.get(`/users/?id=${id}`);
        let result = response.data;
        setId(result.id);
        setUsername(result.username);
        setCreationDate(result.creationDate);
        setBirthday(result.birthday);
        setStatus(result.status);

    }
    fetchData(userId);
    let canEdit = (id === sessionStorage.getItem("id"));
    const navigate = useNavigate();


    function goBack(){
        sessionStorage.removeItem("id");
        navigate("/game")
    }

    return (
        <BaseContainer>
            <h1>at least something</h1>
            <div>username: {username}</div>
            <div>id: {id}</div>
            <div>creation date: {creationDate}</div>
            <div>status: {status}</div>
            <div>birthday: {birthday}</div>
            <Button onClick={goBack}>go Back</Button>
            <h1>{canEdit}</h1>
            {canEdit ? <Button>edit</Button> : null}
        </BaseContainer>

    )

}