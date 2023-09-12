import Link from "next/link";
import { useRouter } from "next/router";

const PasswordForm = ({
    handleUpdatePassword,
    email,
    setEmail,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    error
}) => {
    const router = useRouter();

    return (
        <div className="change-password bg-white py-5 px-4 mt-4 rounded">
            <h6 className="mb-4">Change Password</h6>
            <form className="password-reset-form" onSubmit={handleUpdatePassword}>
                <div className="row g-4">
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {error.email != undefined && <span className="error-msg">{error.email}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter Current password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {error.password != undefined && <span className="error-msg">{error.password}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>New Password</label>
                            <input type="password" placeholder="Enter New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            {error.newPassword != undefined && <span className="error-msg">{error.newPassword}</span>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Re-type Password</label>
                            <input type="password" placeholder="Enter Confirm password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
                            {error.confirmNewPassword != undefined && <span className="error-msg">{error.confirmNewPassword}</span>}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-6">
                    Change Password
                </button>
            </form>
        </div>
    );
}

export default PasswordForm;