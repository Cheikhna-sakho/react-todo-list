import React, { useState } from 'react'
import { updateUser } from '../../api/user.api'
import { UserDataContext } from '../../contexts/UserContext'
import { RegisterField } from '../../data/auth'
import { Input } from '../../model/Form'
import { disableClass } from '../../utils/activeClass'

const EditProfil = ({ refEl }) => {
    const { user,setUser } = UserDataContext();
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [age, setAge] = useState(user?.age);
    const [password, setPassword] = useState(user?.password);

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = { name, email, password, age };
        for (const key in data) {
            const obj = data[key];
            if (obj == "") {
                delete data[key];
            }
        }
        try {
            const res = await updateUser(data);
            setUser(res.data.data);
            disableClass(refEl);
            console.log("res",res);
        } catch (error) {
            console.log(error);
        }
    }
    const champs = [
        new Input("text", (e) => setName(e.target.value), { label: "Modifier votre nom", value: name }),
        new Input("text", (e) => setAge(e.target.value), { label: "Modifier votre age", value: age }),
        new Input("email", (e) => setEmail(e.target.value), { label: "Modifier votre email", value: email }),
        new Input("password", (e) => setPassword(e.target.value), { label: "Modifier votre mot de pass", value: password }),
    ]
    return (
        <form onSubmit={onSubmit} className='edit-form grid'>
            {champs && champs.map((champ,i) => (
                <p key={i}>
                    <label htmlFor={champ.id}>{champ.label}</label>
                    <br />
                    <input {...champ} />
                </p>
            ))}
            <input type="submit" value="Modifier" />
        </form>
    )
}

export default EditProfil