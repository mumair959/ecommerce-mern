import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../components/register/Form";

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const router = useRouter('/');

    const handleSignup = (e) => {
        e.preventDefault();
        try {
            axios.post('/auth/register',{
                firstname,
                lastname,
                email,
                password}).then((res) => {
                if(res.data.success == false){
                    setError(res.data.error);
                    toast.error(res.data.message);
                }
                else{
                    toast.success(res.data.message);
                    setError({});
                    setFirstname('');
                    setLastname('');
                    setEmail('');
                    setPassword('');
                    setTimeout(() => {
                        router.push('/login');
                    }, 1000);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Form handleSignup={handleSignup}
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}/>
        </>
    )
}

export default Register;