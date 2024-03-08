import {Button} from "components/ui/Button";
import React, {useState} from "react";
import BaseContainer from "../ui/BaseContainer";
import {api} from "helpers/api";
import {useNavigate} from "react-router-dom";
import EditForms from "../ui/EditForms";
import "../../styles/views/UserEdit.scss";


export default function UserEdit() {
    let userId = parseInt(sessionStorage.getItem("id"));
    const [id, setId] = useState(null);
    const [username, setUsername] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [creationDate, setCreationDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [editing, setEditing] = useState(false);


    async function fetchData(id) {
        let response = await api.get(`/users/${id}?id=${id}`);
        let result = response.data;
        setId(result.id);
        setUsername(result.username);
        setCreationDate(result.creationDate);
        setBirthday(result.birthday);
        setStatus(result.status);
    }

    fetchData(userId);

    let canEdit = (id === parseInt(localStorage.getItem("id")));
    const navigate = useNavigate();

    function goBack() {
        sessionStorage.removeItem("id");
        navigate("/game")
    }

    function handleChange() {

    }

    return (
        <BaseContainer className="edits">
            <div className="text">username: {username}</div>
            <div className="text">id: {id}</div>
            <div className="text">creation date: {creationDate}</div>
            <div className="text">status: {status}</div>
            <div className="text">birthday: {birthday}</div>
            <div className="buttonedit">
                <Button onClick={goBack}>go Back</Button>
            </div>
            <div className="buttonedit">
                {canEdit ? <Button onClick={() => setEditing(true)}>edit</Button> : null}
            </div>

            {editing ? <EditForms userId={id} editing={setEditing}></EditForms> : null}

        </BaseContainer>

    )
}