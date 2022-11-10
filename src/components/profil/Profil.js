import React from 'react'

const Profil = ({user}) => {
    // console.log(user);
  return (
    <div className="profil flex">
        <div className="profil-cover">
        {/* <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-profile-100-most-used-icons-flaticons-lineal-color-flat-icons.png"/> */}
        </div>
        <div className="profil-info">
          <h2 style={{ textDecoration: "underline" }}>{user.name} {user.age + " ans"}</h2>
          <h3 style={{ textDecoration: "underline" }}>contact: {user.email}</h3>
          <h4>editer mon ptrofil</h4>
        </div>
      </div>
  )
}

export default Profil