import { useNavigate } from 'react-router-dom';
import { createUser } from '../../api/user.api';
import { TokenDataContext, UserDataContext } from '../../contexts/UserContext';
import { RegisterField } from '../../data/auth';
import AuthForm from './AuthForm';

const RegisterForm = () => {
    const { data, champs } = RegisterField();
    const { setUser } = UserDataContext();
    const { setToken } = TokenDataContext();
    const navigate = useNavigate();

    const onSubmited = () => {

        console.log(data);
        createUser(data)
            .then(res => {
                console.log(res.status, "succces");
                setToken(res.data.token);
                setUser(res.data.user);
                navigate("/");
            })
            .catch(err => {

                console.log(err);
            })
    }
    return (
        <AuthForm title={"Inscription"} data={champs} onSubmited={onSubmited} />
    )
}

export default RegisterForm