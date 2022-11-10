import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user.api';
import { LoginField } from '../../data/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
    const {data,champs} = LoginField();
    const navigate = useNavigate();

   
    const onSubmited = () => {
        console.log(data);

        login(data)
            .then(res => {
                console.log(res.status, "succces");
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <AuthForm data={champs} onSubmited={onSubmited} />
    )
}

export default LoginForm