import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../components/login/Form";
import { UserContext } from "../context";

const Login = () => {
    const [state, setState] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const router = useRouter('/');

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            axios.post('/auth/login',{email,password}).then((res) => {
                if(res.data.success === false){
                    setError(res.data.error);
                    toast.error(res.data.message);
                }
                else{
                    toast.success(res.data.message);
                    setError({});
                    setEmail('');
                    setPassword('');
                    setState({
                        token : res.data.token,
                        user : res.data.user
                    });
                    
                    window.localStorage.setItem('auth',JSON.stringify(res.data));
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Form handleLogin={handleLogin}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}/>
        </>
    )
}

export default Login;