import Link from "next/link";
import { useRouter } from "next/router";

const ProfileForm = ({
    handleUpdateProfile,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    phone,
    setPhone,
    username,
    setUsername,
    error
}) => {
    const router = useRouter();

    return (
        <div className="update-profile bg-white py-5 px-4">
            <h6 className="mb-4">Update Profile</h6>
            <form className="profile-form" onSubmit={handleUpdateProfile}>
                <div className="row g-4">
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>First Name</label>
                            <input type="text" placeholder="Enter First Name"  value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            {error.firstname != undefined && <span className="error-msg">{error.firstname}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter Last Name"  value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            {error.lastname != undefined && <span className="error-msg">{error.lastname}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Phone/Mobile</label>
                            <input type="tel" placeholder="Enter Phone#"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            {error.phone != undefined && <span className="error-msg">{error.phone}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter Email Address"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {error.email != undefined && <span className="error-msg">{error.email}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>User Name</label>
                            <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                            {error.username != undefined && <span className="error-msg">{error.username}</span>}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-6">
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default ProfileForm;