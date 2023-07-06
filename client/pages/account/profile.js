import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";

const Profile = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter('/');

    useEffect(() => {
        let authtoken = JSON.parse(window.localStorage.getItem('auth'));
        if (authtoken == null) {
            router.push('/');
        }
        setMounted(true);
    },[]);

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
                                        <div className="update-profile bg-white py-5 px-4">
                                            <h6 className="mb-4">Update Profile</h6>
                                            <form className="profile-form">
                                                <div className="file-upload text-center rounded-3 mb-5">
                                                    <input type="file" name="dp" />
                                                    <img src="/assets/img/icons/image.svg" alt="dp" className="img-fluid" />
                                                    <p className="text-dark fw-bold mb-2 mt-3">
                                                        Drop your files here or
                                                        <a href="#" className="text-primary">browse</a>
                                                    </p>
                                                    <p className="mb-0 file-name">
                                                        (Only *.jpeg and *.png images will be accepted)
                                                    </p>
                                                </div>
                                                <div className="row g-4">
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>First Name</label>
                                                            <input type="text" placeholder="Gene J." />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Last Name</label>
                                                            <input type="text" placeholder="Larose" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Phone/Mobile</label>
                                                            <input type="tel" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Email Address</label>
                                                            <input type="email" placeholder="themetags@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Birthday</label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>User Name</label>
                                                            <input type="text" placeholder="Username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mt-6">
                                                    Update Profile
                                                </button>
                                            </form>
                                        </div>
                                        <div className="change-password bg-white py-5 px-4 mt-4 rounded">
                                            <h6 className="mb-4">Change Password</h6>
                                            <form className="password-reset-form">
                                                <div className="row g-4">
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Email Address</label>
                                                            <input type="email" placeholder="themetags@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Current Password</label>
                                                            <input type="password" placeholder="Current password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>New Password</label>
                                                            <input type="password" placeholder="New password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="label-input-field">
                                                            <label>Re-type Password</label>
                                                            <input type="password" placeholder="Confirm password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mt-6">
                                                    Change Password
                                                </button>
                                            </form>
                                        </div>
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