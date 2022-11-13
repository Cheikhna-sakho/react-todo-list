// import React, { useState } from 'react'
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { deleteUser, logout } from "../../api/user.api";
import { TokenDataContext, UserDataContext } from "../../contexts/UserContext";
import ProfilCover from "./ProfilCover";
import EditProfil from "./EditProfil";
import { useRef } from "react";
import { activeClass } from "../../utils/activeClass";
const Profil = () => {
    const { user, setUser } = UserDataContext();
    const { setToken } = TokenDataContext();
    const editForm = useRef(null);
    const onLogout = async () => {
        try {
            await logout();
            setToken(null);
            setUser(null);
        } catch (error) {

        }
    }
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
        <div className="user flex">
            <div className="profil flex">
                <ProfilCover />
                <div className="profil-info grid">

                    <h3>Pseudo: {user.name} </h3>

                    <h3>Age: {user.age + " ans"}</h3>
                    <h3>contact: {user.email}</h3>
                    <div className="option-profil flex">
                        <div onClick={() => { activeClass(editForm); console.log("first") }} className="edit-profil-btn">
                            <span><FaUserEdit /></span>
                            Modifier</div>
                        <div onClick={deleteProfil} className="delete-profil-btn">
                            <span><AiOutlineUserDelete /></span>
                            Supprimer
                        </div>
                    </div>
                    <div onClick={onLogout} className="logout flex">
                        <span><BiLogOut /></span>
                        Deconnexion
                    </div>
                </div>
            </div>
            <div ref={editForm} className="edit-box">
                <EditProfil refEl={editForm} />
            </div>
        </div>
    )
}

export default Profil