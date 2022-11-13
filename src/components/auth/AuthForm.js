import React from 'react'
import { Link } from 'react-router-dom';

const AuthForm = ({title, data, onSubmited }) => {
    const altSubmit = title?.toLowerCase() === "inscription" ? {title:"Connection",to:"/login"} : {title:"inscription",to:"/register"};
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmited();
    }
    return (
        <form onSubmit={onSubmit}>
            {data.map((champ, i) => (
                <p key={i}>
                    {champ?.label && (
                        <>
                            <label htmlFor={champ?.id}>{champ.label}</label>
                            <br />
                        </>
                    )}
                    <input {...champ} />
                </p>
            ))}
            <input type="submit"  value={title}/>
            <Link to={altSubmit.to}>{altSubmit.title}</Link>
        </form>
    )
}

export default AuthForm;