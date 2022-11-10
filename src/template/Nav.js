import React from 'react'
import Profil from '../components/profil/Profil';
import { UserDataContext } from '../contexts/UserContext';


const Nav = () => {
  const { user } = UserDataContext();

  return (
    <nav>
      <Profil user={user} />
      <p style={{ padding: "10px", fontSize: "1.3em", background: "blue", color: "white", width: "max-content" }}>Me deconnecter</p>
    </nav>
  )
}

export default Nav;