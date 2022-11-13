import React from 'react'
import { RegisterField } from '../../data/auth'
import { Input } from '../../model/Form'

const EditProfil = () => {
    const {data,champs} = RegisterField();
  return (
    <form>
        {champs && champs.map(champ => (
            <input {...champ} />
        ))}
    </form>
  )
}

export default EditProfil