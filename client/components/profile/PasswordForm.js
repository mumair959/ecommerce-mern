import Link from "next/link";
import { useRouter } from "next/router";

const PasswordForm = ({
    
}) => {
    const router = useRouter();

    return (
        <div className="change-password bg-white py-5 px-4 mt-4 rounded">
            <h6 className="mb-4">Change Password</h6>
            <form className="password-reset-form">
                <div className="row g-4">
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter Email Address" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter Current password" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>New Password</label>
                            <input type="password" placeholder="Enter New password" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="label-input-field">
                            <label>Re-type Password</label>
                            <input type="password" placeholder="Enter Confirm password" />
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