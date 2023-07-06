import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../components/contact/Form";

const Contact = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState({});

    const handleSendMessage = (e) => {
        e.preventDefault();
        try {
            axios.post('/message',{
                firstname,
                lastname,
                email,
                phone,
                content}).then((res) => {
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
                    setPhone('');
                    setContent('');
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Form 
                handleSendMessage={handleSendMessage}
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                content={content}
                setContent={setContent}
                error={error}
            />
        </>
    )
}

export default Contact;