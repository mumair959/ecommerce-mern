import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Footer = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubscribe = (e) => {
        e.preventDefault();
        try {
            axios.post('/email-subscription/subscribe',{email}).then((res) => {
                if(res.data.success == false){
                    toast.error(res.data.message);
                }
                else{
                    toast.success(res.data.message);
                    setEmail('');
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <div className="footer-curve position-relative overflow-hidden">
            <span className="position-absolute section-curve-wrapper top-0 h-100" data-background="/assets/img/shapes/section-curve.png"></span>
        </div>
        <footer className="gshop-footer position-relative pt-8 bg-dark z-1 overflow-hidden">
            <img src="/assets/img/shapes/tomato.svg" alt="tomato" className="position-absolute z--1 tomato vector-shape" />
            <img src="/assets/img/shapes/pata-lg.svg" alt="pata" className="position-absolute z--1 pata-lg vector-shape" />
            <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute z--1 pata-xs vector-shape" />
            <img src="/assets/img/shapes/frame-circle.svg" alt="frame" className="position-absolute z--1 frame-circle vector-shape" />
            <img src="/assets/img/shapes/leaf.svg" alt="leaf" className="position-absolute z--1 leaf vector-shape" />

            <img src="/assets/img/shapes/leaf.svg" alt="pata" className="position-absolute leaf-2 z--1 vector-shape" />
            <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute pata-xs-2 z--1 vector-shape" />
            <img src="/assets/img/shapes/tomato-slice.svg" alt="tomato slice" className="position-absolute tomato-slice vector-shape z--1" />
            <img src="/assets/img/shapes/tomato-half.svg" alt="tomato" className="position-absolute tomato-half z--1 vector-shape" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="gshop_subscribe_form text-center">
                            <h4 className="text-white gshop-title">Subscribe to the G-Shop <mark className="p-0 position-relative text-secondary bg-transparent">New Arrivals <img src="/assets/img/shapes/border-line.svg" alt="border line" className="position-absolute border-line" /></mark><br className="d-none d-sm-block" />& Other Information.</h4>
                            <form onSubmit={handleSubscribe} className="mt-5 d-flex align-items-center bg-white rounded subscribe_form">
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
                                <button type="submit" className="btn btn-primary flex-shrink-0">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <span className="gradient-spacer my-8 d-block"></span>
                <div className="row g-5">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <h5 className="text-white mb-4">Category</h5>
                            <ul className="footer-nav">
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Location & Working Hours</a></li>
                                <li><a href="#">Our Guarantee</a></li>
                                <li><a href="#">Track Your Order</a></li>
                                <li><a href="#">Help Page</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <ul className="footer-nav">
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">Return Center</a></li>
                                <li><a href="#">Purchase History</a></li>
                                <li><a href="#">Latest News Blog</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <h5 className="text-white mb-4">Contact Us</h5>
                            <ul className="footer-nav">
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Location & Working Hours</a></li>
                                <li><a href="#">Our Guarantee</a></li>
                                <li><a href="#">Track Your Order</a></li>
                                <li><a href="#">Help Page</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <h5 className="text-white mb-4">Customer Support</h5>
                            <ul className="footer-nav">
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">Return Center</a></li>
                                <li><a href="#">Purchase History</a></li>
                                <li><a href="#">Latest News Blog</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright pt-120 pb-3">
                <span className="gradient-spacer d-block mb-3"></span>
                <div className="container">
                    <div className="row align-items-center g-3">
                        <div className="col-lg-4">
                            <div className="copyright-text">
                                <p className="mb-0 text-white">&copy; All rights reserved Made by <a href="#" className="text-secondary">ThemeTags</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="logo-wrapper text-center">
                                <a href="index.html" className="logo"><img src="/assets/img/logo-white.png" alt="logo" className="img-fluid" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-payments-info d-flex align-items-center justify-content-lg-end gap-2">
                                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                                    <img src="/assets/img/brands/visa.png" alt="visa" className="img-fluid" />
                                </div>
                                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                                    <img src="/assets/img/brands/mastercard.png" alt="visa" className="img-fluid" />
                                </div>
                                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                                    <img src="/assets/img/brands/payoneer.png" alt="visa" className="img-fluid" />
                                </div>
                                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                                    <img src="/assets/img/brands/paypal.png" alt="visa" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>

    );
}

export default Footer;