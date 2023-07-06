import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import CartBanner from "../components/cart/CartBanner";

const Cart = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter('/');

    useEffect(() => {
        let authtoken = JSON.parse(window.localStorage.getItem('auth'));
        if (authtoken == null) {
            router.push('/');
        }
        setMounted(true);
    }, []);

    return (
        mounted && <>
            <CartBanner />
            <section className="cart-section ptb-120">
                <div className="container">
                    <div className="select-all d-flex align-items-center justify-content-between bg-white rounded p-4">
                        <div className="d-inline-flex gap-2 align-items-center">
                            <div className="theme-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-field"><i className="fa-solid fa-check"></i></span>
                            </div>
                            <label>Select All(03 ITEMS)</label>
                        </div>
                        <a href="#" className="text-gray"><span className="me-2"><i className="fa-solid fa-trash-can"></i></span>Delete</a>
                    </div>
                    <div className="rounded-2 overflow-hidden">
                        <table className="cart-table w-100 mt-4 bg-white">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/assets/img/products/thumb-sm-1.png" alt="product-thumb" className="img-fluid" />
                                    </td>
                                    <td className="text-start product-title">
                                        <h6 className="mb-0">Three Carrot Vegetables Peruvian Cuisine</h6>
                                    </td>
                                    <td>
                                        <div className="product-qty d-inline-flex align-items-center">
                                            <button className="decrese">-</button>
                                            <input type="text" value="01" />
                                            <button className="increase">+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Unit Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Total Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="/assets/img/products/thumb-sm-1.png" alt="product-thumb" className="img-fluid" />
                                    </td>
                                    <td className="text-start product-title">
                                        <h6 className="mb-0">Three Carrot Vegetables Peruvian Cuisine</h6>
                                    </td>
                                    <td>
                                        <div className="product-qty d-inline-flex align-items-center">
                                            <button className="decrese">-</button>
                                            <input type="text" value="01" />
                                            <button className="increase">+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Unit Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Total Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="/assets/img/products/thumb-sm-1.png" alt="product-thumb" className="img-fluid" />
                                    </td>
                                    <td className="text-start product-title">
                                        <h6 className="mb-0">Three Carrot Vegetables Peruvian Cuisine</h6>
                                    </td>
                                    <td>
                                        <div className="product-qty d-inline-flex align-items-center">
                                            <button className="decrese">-</button>
                                            <input type="text" value="01" />
                                            <button className="increase">+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Unit Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                    <td>
                                        <span className="text-dark fw-bold me-2 d-lg-none">Total Price:</span>
                                        <span className="text-dark fw-bold">$140.00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-7">
                            <div className="voucher-box py-7 px-5 position-relative z-1 overflow-hidden bg-white rounded mt-4">
                                <img src="/assets/img/shapes/circle-half.png" alt="circle shape" className="position-absolute end-0 top-0 z--1" />
                                <h4 className="mb-3">What would you like to do next?</h4>
                                <p className="mb-7">Choose if you have a discount code or reward points you want to use<br /> or would like to estimate your delivery cost.</p>
                                <form className="d-flex align-items-center" action="#">
                                    <input type="text" placeholder="Enter Your Voucher Cod" className="theme-input w-100" />
                                    <button type="submit" className="btn btn-secondary flex-shrink-0">Apply Voucher</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="cart-summery bg-white rounded-2 pt-4 pb-6 px-5 mt-4">
                                <table className="w-100">
                                    <tbody>
                                        <tr>
                                            <td className="py-3">
                                                <h5 className="mb-0 fw-medium">Subtotal</h5>
                                            </td>
                                            <td className="py-3">
                                                <h5 className="mb-0 fw-semibold text-end">$1138,00</h5>
                                            </td>
                                        </tr>
                                        <tr className="border-top">
                                            <td className="py-3">
                                                <h5 className="mb-0">Total</h5>
                                            </td>
                                            <td className="text-end py-3">
                                                <h5 className="mb-0">$918,00</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="mb-5 mt-2">Shipping options will be updated during checkout.</p>
                                <div className="btns-group d-flex gap-3">
                                    <Link href="/checkout">                    
                                        <button type="submit" className="btn btn-primary btn-md rounded-1">Confirm Order</button>
                                    </Link>
                                    <Link href="/shop">                    
                                        <button type="button" className="btn btn-outline-secondary border-secondary btn-md rounded-1">Continue Shopping</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;