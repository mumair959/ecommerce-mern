import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";
import ProfileForm from "../../components/profile/ProfileForm";
import PasswordForm from "../../components/profile/PasswordForm";

const Profile = () => {
    const [id, setId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState({});

    const [mounted, setMounted] = useState(false);
    const router = useRouter('/');

    useEffect(() => {
        let authtoken = JSON.parse(window.localStorage.getItem('auth'));
        if (authtoken == null) {
            router.push('/');
        }
        setMounted(true);
        getUserData();
    },[]);

    const getUserData = async (e) => {
        const {data} = await axios.get('/user/get-auth-user-details');
        setId(data.data._id)
        setFirstname(data.data.firstname)
        setLastname(data.data.lastname)
        setEmail(data.data.email)
        setPhone(data.data.phone)
        setUsername(data.data.username)
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        try {
            axios.put('/user/update-user-info',{
                id,
                firstname,
                lastname,
                email,
                phone,
                username}).then((res) => {
                if(res.data.success == false){
                    setError(res.data.error);
                    toast.error(res.data.message);
                }
                else{
                    toast.success(res.data.message);
                    setError({});
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        mounted && <>
            <section className="my-account pt-6 pb-120">
                <div className="container">
                <AccountBanner />
                    <div className="row g-4">
                        <AccountSideBar />
                        <div className="col-xl-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active">
                                        <ProfileForm 
                                            handleUpdateProfile={handleUpdateProfile}
                                            firstname={firstname}
                                            setFirstname={setFirstname}
                                            lastname={lastname}
                                            setLastname={setLastname}
                                            email={email}
                                            setEmail={setEmail}
                                            phone={phone}
                                            setPhone={setPhone}
                                            username={username}
                                            setUsername={setUsername}
                                            error={error}
                                        />
                                        <PasswordForm />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;