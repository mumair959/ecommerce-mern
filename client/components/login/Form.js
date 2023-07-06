import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    error
}) => {
    const router = useRouter();

    return (
        <div className="main-wrapper">
            <section className="login-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-12 tt-login-img" data-background="/assets/img/banner/login-banner.jpg"></div>
                            <div className="col-lg-5 col-12 bg-white d-flex p-0 tt-login-col shadow">
                                <form className="tt-login-form-wrap p-3 p-md-6 p-lg-6 py-7 w-100" onSubmit={handleLogin}>
                                    <div className="mb-7">
                                        <Link href="/">
                                            <img src="/assets/img/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <h2 className="mb-4 h3">Hey there! <br />Welcome back <span className="text-secondary">Grostore.</span></h2>
                                    <div className="row g-3">
                                        <div className="col-sm-12">
                                            <div className="input-field">
                                                <label className="fw-bold text-dark fs-sm mb-1">Email</label>
                                                <input type="email" placeholder="Enter your email" className="theme-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                {error.email != undefined && <span className="error-msg">{error.email}</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="input-field check-password">
                                                <label className="fw-bold text-dark fs-sm mb-1">Password</label>
                                                <div className="check-password">
                                                    <input type="password" placeholder="Password" className="theme-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                                    <span className="eye eye-icon">
                                                        <i className="fa-solid fa-eye"></i>
                                                    </span>
                                                    <span className="eye eye-slash">
                                                        <i className="fa-solid fa-eye-slash"></i>
                                                    </span>
                                                    {error.password != undefined && <><br/><span className="error-msg">{error.password}</span></>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                    <div className="row g-4 mt-4">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary w-100">Sign In</button>
                                        </div>
                                    </div>
                                    <p className="mb-0 fs-xs mt-4">Don't have an Account? <Link href="/register">Sign Up</Link>
                                    </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>  
    );
}

export default Form;