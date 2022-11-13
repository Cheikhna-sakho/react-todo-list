import { useState } from "react";

import { RiImageEditFill, RiImageAddLine } from "react-icons/ri";
import { getAvatar, uploadImage } from "../../api/user.api";

const ProfilCover = () => {
    const [avatar, setAvatar] = useState(null);
    const addAvatar = async () => {
        let avatarFormData = new FormData();
        avatarFormData.append("avatar", avatar);
        try {
            const res = await uploadImage(avatarFormData);
            console.log(res, "uplod");
            setAvatar(null)
            const getUserImage = await getAvatar();
            console.log(getUserImage, "user image");

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="profil-cover grid">
            <p>
                {<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-profile-100-most-used-icons-flaticons-lineal-color-flat-icons.png" />}
            </p>
            <p onClick={() => { }}>
                <label htmlFor="avatar" className="add-img-label grid">
                    <span><RiImageEditFill /></span>
                    <span className="add-img">ajouter</span>
                    <input onChange={(e) => setAvatar(e.target.files[0])} style={{ display: "none" }} type="file" id="avatar" />
                </label>
                {avatar && <button onClick={addAvatar} >confirmer</button>}
            </p>
        </div>
    )
}

export default ProfilCover