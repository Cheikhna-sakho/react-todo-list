import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user.api';
import { TokenDataContext, UserDataContext } from '../../contexts/UserContext';
import { LoginField } from '../../data/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
    const {data,champs} = LoginField();
    const navigate = useNavigate();
    const { setUser } = UserDataContext();
    const { setToken } = TokenDataContext();
   
    const onSubmited = () => {
        console.log(data);

        login(data)
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
        <AuthForm title={"Connection"} data={champs} onSubmited={onSubmited} />
    )
}

export default LoginForm