import React from 'react'
import Profil from '../components/profil/Profil';
import { UserDataContext } from '../contexts/UserContext';


const Nav = () => {
  const { user } = UserDataContext();

  return (
    <nav>
      {user && (
        <>
          <Profil />
        </>
      )
      }
    </nav>
  )
}

export default Nav;