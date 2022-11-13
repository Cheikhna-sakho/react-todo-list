import React, { createContext, useContext, useEffect } from 'react'
import { logged } from '../api/user.api';
import useLocalStorage from '../hooks/useLocalStorage';
const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [token, setToken] = useLocalStorage("token", null);
    useEffect(() => {
        token && !user && logged()
            .then(res => {
                setUser(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [token,setUser,user])
    const data = {
        userDataContext: { user, setUser },
        tokenDataContext: { token, setToken },
     
    }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;

export const UserUseContext = () => {
    const user = useContext(UserContext);
    return user;
}
export const TokenDataContext = () => {
    const { tokenDataContext } = UserUseContext();
    return tokenDataContext;
}
export const UserDataContext = () => {
    const { userDataContext } = UserUseContext();
    return userDataContext;
}
