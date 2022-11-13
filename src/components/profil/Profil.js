// import React, { useState } from 'react'
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { deleteUser, getAvatar, uploadImage } from "../../api/user.api";
import { TokenDataContext, UserDataContext } from "../../contexts/UserContext";
import ProfilCover from "./ProfilCover";
const Profil = () => {
    const { user, setUser } = UserDataContext();

    const { token } = TokenDataContext();
    // const [name,setName] = useState(null);
    // const [age,setAge] = useState(null);
    // const [email,setEmail] = useState(null);
    // console.log(avatar);


    const deleteProfil = async () => {
        try {
            const res = await deleteUser();
            console.log(res);
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="profil flex">
            <ProfilCover />
            <div className="profil-info grid">
                <h3 style={{ textDecoration: "underline" }}>Pseudo: {user.name} </h3>
                <h3 style={{ textDecoration: "underline" }}>Age: {user.age + " ans"}</h3>
                <h3 style={{ textDecoration: "underline" }}>contact: {user.email}</h3>
                <div className="option-profil flex">
                    <div className="edit-profil-btn">
                        <span><FaUserEdit /></span>
                        Modifier</div>
                    <div onClick={deleteProfil} className="delete-profil-btn">
                        <span><AiOutlineUserDelete /></span>
                        Supprimer
                    </div>
                </div>
                {/* <h4>editer mon ptrofil</h4> */}
            </div>

        </div>
    )
}

export default Profil