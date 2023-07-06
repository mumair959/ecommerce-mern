import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({
    handleSendMessage,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    phone,
    setPhone,
    content,
    setContent,
    error
}) => {
    const router = useRouter();

    return (
        <section className="contact-us-section position-relative overflow-hidden z-1 pt-80 pb-120">
            <img src="/assets/img/shapes/frame-circle.svg" alt="frame circle" className="position-absolute frame z--1 d-none d-sm-block" />
            <img src="/assets/img/shapes/roll-2.png" alt="roll" className="position-absolute roll-2 z--1" />
            <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute pata z--1" />
            <img src="/assets/img/shapes/garlic-white.png" alt="garlic" className="position-absolute garlic z--1" />
            <img src="/assets/img/shapes/roll-1.png" alt="roll" className="position-absolute roll-1 z--1" />
            <img src="/assets/img/shapes/leaf.svg" alt="leaf" className="position-absolute leaf z--1" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content">
                            <h2 className="mb-2 text-center">Get In Touch</h2>
                            <nav>
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item fw-bold" aria-current="page"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item fw-bold" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="contact-box rounded-2 bg-white overflow-hidden mt-8">
                    <div className="row g-4">
                        <div className="col-xl-5">
                            <div className="contact-left-box position-relative overflow-hidden z-1 bg-primary p-6 d-flex flex-column h-100" data-background="/assets/img/shapes/circle-half-fill.png">
                                <img src="/assets/img/shapes/texture-overlay.png" alt="texture" className="position-absolute w-100 h-100 start-0 top-0 z--1" />
                                <h3 className="text-white mb-3">Contact Details</h3>
                                <p className="fs-sm text-white"><strong>Office Address-1:</strong> G-shop Grocery shop (United Estate<br /> Of America) Co., Ltd. Bridge 8, Room 9201.</p>
                                <p className="fs-sm text-white mb-0"><strong>Office Address-2:</strong> #25 Jocker Goru Zhong Road<br /> NYPD 200025 USA.</p>
                                <span className="spacer my-5"></span>
                                <ul className="contact-list">
                                    <li className="d-flex align-items-center gap-3 flex-wrap">
                                        <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </span>
                                        <div className="info">
                                            <span className="fw-medium text-white fs-xs">Emergency Call</span>
                                            <h5 className="mb-0 mt-1 text-white">+90 54 3147 87 98</h5>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 flex-wrap mt-3">
                                        <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                        <i className="fa-regular fa-envelope"></i>
                                    </span>
                                        <div className="info">
                                            <span className="fw-medium text-white fs-xs">General Communication</span>
                                            <p className="mb-0 mt-1 text-white fw-medium">gshop2022@gmail.com</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-5">
                                    <span className="fw-bold text-white mb-3 d-block">Social Share:</span>
                                    <div className="social-links d-flex align-items-center gap-2">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-discord"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <form className="contact-form ps-5 ps-xl-4 py-6 pe-6" onSubmit={handleSendMessage}>
                                <h3 className="mb-6">Need Help? Send Message</h3>
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="label-input-field">
                                            <label>First Name</label>
                                            <input type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                                            {error.firstname != undefined && <span className="error-msg">{error.firstname}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="label-input-field">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                                            {error.lastname != undefined && <span className="error-msg">{error.lastname}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="label-input-field">
                                            <label>Email</label>
                                            <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            {error.email != undefined && <span className="error-msg">{error.email}</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="label-input-field">
                                            <label>Phone</label>
                                            <input type="tel" placeholder="Enter Phone#" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                            {error.phone != undefined && <span className="error-msg">{error.phone}</span>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="label-input-field">
                                            <label>Messages</label>
                                            <textarea placeholder="Write Your Message" rows="6" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                                            {error.message != undefined && <span className="error-msg">{error.message}</span>}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-md rounded-1 mt-6">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;