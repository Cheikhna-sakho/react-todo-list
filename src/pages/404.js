import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            Page introuvable
            revenir a la page d'accuil <Link to={"/"}>ici</Link>
        </div>
    )
}

export default NotFoundPage;