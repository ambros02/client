import React, {useState} from "react";
import {api} from "../../helpers/api.js";
import PropTypes from "prop-types";
import "../../styles/ui/EditForms.scss"


export default function EditForms(props) {

    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");


    function handleChange(event) {
        let {name, value} = event.target;
        switch (name) {
        case "username":
            setUsername(value);
            break;
        case "birthday":
            setBirthday(value);
            break;
        }


    }

    async function handleSubmit(event, id) {
        let requestBody = {username, birthday}
        let response = await api.put(`/users/?id=${id}`, requestBody);

        setBirthday("");
        setUsername("");
        props.editing(false);
    }

    return (
        <div>
            <form className="editform">
                <label className="labeledit">username</label>
                <input className="inputedit" type="text" name="username" value={username} onChange={handleChange}/>
                <label className="labeledit">birthday: (format YYYY-MM-DD)</label>
                <input className="inputedit" type="date" name="birthday" value={birthday} onChange={handleChange}/>
                <input className="editbutton" type="button" value={"submit"} onClick={(e) => handleSubmit(e, props.userId)}/>
            </form>
        </div>
    )

}

EditForms.propTypes = {
    userId: PropTypes.int,
    editing: PropTypes.func,
};