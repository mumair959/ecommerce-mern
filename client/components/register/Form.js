import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({
    handleSignup,
    firstname,
    setFirstname,
    lastname,
    setLastname,
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
                        <div className="col-lg-5 col-12 tt-login-img" data-background="assets/img/banner/login-banner.jpg"></div>
                        <div className="col-lg-5 col-12 bg-white d-flex p-0 tt-login-col shadow">
                            <form className="tt-login-form-wrap p-3 p-md-6 p-lg-6 py-7 w-100" onSubmit={handleSignup}>
                                <div className="text-center mb-7">
                                    <Link href="/"><img src="assets/img/logo.png" alt="logo" /></Link>
                                </div>
                                <h4 className="mb-3">Get started absolutely free</h4>
                                <p className="fs-xs">Already have an account? <Link href="/login" className="text-secondary">Sign in</Link></p>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="input-field">
                                            <input type="text" placeholder="First name" className="theme-input" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                                            {error.firstname != undefined && <span className="error-msg">{error.firstname}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-field">
                                            <input type="text" placeholder="Last name" className="theme-input" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                                            {error.lastname != undefined && <span className="error-msg">{error.lastname}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="input-field">
                                            <input type="email" placeholder="Email address" className="theme-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            {error.email != undefined && <span className="error-msg">{error.email}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="input-field check-password">
                                            <input type="password" placeholder="Password" className="theme-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            <span className="eye eye-icon"><i className="fa-solid fa-eye"></i></span>
                                            <span className="eye eye-slash"><i className="fa-solid fa-eye-slash"></i></span>
                                            {error.password != undefined && <><br/><span className="error-msg">{error.password}</span></>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 mt-4">
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-primary w-100">Create account</button>
                                    </div>
                                </div>
                                <p className="mb-0 fs-xxs mt-4 text-center">By signing up, I agree to <a href="#" className="text-dark">Terms of Use and Privacy Policy</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>  
    );
}

export default Form;