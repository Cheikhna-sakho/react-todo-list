import React from 'react'

const AuthForm = ({ data, onSubmited }) => {
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
            <input type="submit" />
        </form>
    )
}

export default AuthForm;