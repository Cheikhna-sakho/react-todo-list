import { useState } from "react";
import {Input} from '../model/Form';
export const LoginField = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const champs = [
        new Input("text", (e) => setEmail(e.target.value), { id: "email", label: "Entrer votre email", required: true }),
        new Input("password", (e) => setPassword(e.target.value), { id: "password", label: "Entrer votre mot de passe" }),
    ];
    const data = { email, password }
    return { data, champs };
}

export const RegisterField = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [age, setAge] = useState(null);
    
    const champs = [
        new Input("text", (e) => setName(e.target.value), { id: "username", label: "Nom d'utilisateur", required: true }),
        new Input("text", (e) => setEmail(e.target.value), { id: "email", label: "Email", required: true }),
        new Input("password", (e) => setPassword(e.target.value), { id: "password", label: "Mot de passe", require: true }),
        new Input("text", (e) => setAge(e.target.value), { id: "age", label: "age" }),
    ];

    const data = {
        name,
        email,
        password,
        age
    }
    return { data, champs };
} 