import React,{useState} from "react";
import {Form} from "react-router-dom";
import {api} from "../../helpers/api.js";
import PropTypes from "prop-types";



export default function EditForms(props){

    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");


    function handleChange(event){
        let {name,value} = event.target;
        switch(name){
            case "username":
                setUsername(value);
                break;
            case "birthday":
                setBirthday(value);
                break;
        }


    }

    async function handleSubmit(event,id){
        let requestBody = {username,birthday}
        let response = await api.put(`/users/?id=${id}`,requestBody);
        setBirthday("");
        setUsername("");
        props.editing(false);
    }

    return(
        <div>
            <form>
                <label>username</label>
                <input type="text" name="username" value={username} onChange={handleChange}/>
                <label>birthday</label>
                <input type="text" name="birthday" value={birthday} onChange={handleChange}/>
                <input type="button" value={"submit"} onClick={(e) => handleSubmit(e,props.userId)}/>
            </form>
        </div>
    )

}

EditForms.propTypes = {
    userId: PropTypes.int,
    editing: PropTypes.func,
};