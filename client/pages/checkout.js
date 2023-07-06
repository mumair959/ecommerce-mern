import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import CheckoutBanner from "../components/checkout/CheckoutBanner";

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
            <CheckoutBanner />
            <div className="checkout-section ptb-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-8">
                            <div className="checkout-steps">
                                <div className="d-flex justify-content-between">
                                    <h4 className="mb-5">Shipment Address</h4>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#addAddressModal" className="fw-semibold"><i className="fas fa-plus me-1"></i> Add Address</a>
                                </div>
                                <div className="row g-4">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="tt-address-content">
                                            <input type="radio" className="tt-custom-radio" checked name="tt-radio" id="tt-radio-1" />
                                            <label for="tt-radio-1" className="tt-address-info bg-white rounded p-4 position-relative">
                                                <strong>Los Angeles </strong>
                                                <address className="fs-sm mb-0">
                                                    76 Ferny Avenue <br />
                                                Oakwood Qld 4670
                                                </address>
                                                <a href="#" className="tt-edit-address checkout-radio-link position-absolute">Edit</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="tt-address-content">
                                            <input type="radio" className="tt-custom-radio" name="tt-radio" id="tt-radio-2" />
                                            <label for="tt-radio-2" className="tt-address-info bg-white rounded p-4 position-relative">
                                                <strong>Los Angeles </strong>
                                                <address className="fs-sm mb-0">
                                                    76 Ferny Avenue <br />
                                                Oakwood Qld 4670
                                                </address>
                                                <a href="#" className="tt-edit-address checkout-radio-link position-absolute">Edit</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <h4 className="mb-5 mt-8">Billing Address</h4>
                                <div className="row g-4">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="tt-address-content">
                                            <input type="radio" className="tt-custom-radio" name="tt-radio-billing" checked id="tt-radio-3" />
                                            <label for="tt-radio-3" className="tt-address-info bg-white rounded p-4 position-relative">
                                                <strong>Los Angeles </strong>
                                                <address className="fs-sm mb-0">
                                                    76 Ferny Avenue <br />
                                                Oakwood Qld 4670
                                                </address>
                                                <a href="#" className="tt-edit-address checkout-radio-link position-absolute">Edit</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="tt-address-content">
                                            <input type="radio" className="tt-custom-radio" name="tt-radio-billing" id="tt-radio-4" />
                                            <label for="tt-radio-4" className="tt-address-info bg-white rounded p-4 position-relative">
                                                <strong>Los Angeles </strong>
                                                <address className="fs-sm mb-0">
                                                    76 Ferny Avenue <br />
                                                Oakwood Qld 4670
                                                </address>
                                                <a href="#" className="tt-edit-address checkout-radio-link position-absolute">Edit</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="tt-address-content">
                                            <input type="radio" className="tt-custom-radio" name="tt-radio-billing" id="tt-radio-5" />
                                            <label for="tt-radio-5" className="tt-address-info bg-white rounded p-4 position-relative">
                                                <strong>Los Angeles </strong>
                                                <address className="fs-sm mb-0">
                                                    76 Ferny Avenue <br />
                                                Oakwood Qld 4670
                                                </address>
                                                <a href="#" className="tt-edit-address checkout-radio-link position-absolute">Edit</a>
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <h4 className="mt-8">Payment Method</h4>
                                <div className="checkout-form mt-4 py-7 px-5 bg-white rounded-2">
                                    <div className="form-title d-flex align-items-center mb-5">
                                        <div className="theme-radio">
                                            <input type="radio" id="shipment" checked />
                                            <span className="custom-radio"></span>
                                        </div>
                                        <label className="h6 mb-0 ms-2" for="shipment">Credit Card or Debit Card</label>
                                    </div>
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-sm-12">
                                                <div className="label-input-field mt-0">
                                                    <input type="text" placeholder="****  **** **** 7898" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field mt-0">
                                                    <input type="text" placeholder="12 / 24" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field mt-0">
                                                    <input type="text" placeholder="****" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field mt-0">
                                                    <input type="tel" placeholder="478958" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field">
                                                    <label>City</label>
                                                    <input type="text" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field">
                                                    <label>State</label>
                                                    <input type="text" placeholder="State" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="label-input-field">
                                                    <label>Zip Code</label>
                                                    <input type="text" placeholder="Dhaka-1230" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 mt-4 flex-wrap">
                                            <div className="checkbox d-flex align-items-center gap-2 me-3">
                                                <div className="theme-checkbox flex-shrink-0">
                                                    <input type="checkbox" id="save-card" />
                                                    <span className="checkbox-field"><i className="fa-solid fa-check"></i></span>
                                                </div>
                                                <label for="save-card">Save this Credit Card for later use</label>
                                            </div>
                                            <div className="checkbox d-flex align-items-center gap-2">
                                                <div className="theme-checkbox flex-shrink-0">
                                                    <input type="checkbox" id="billing-info" />
                                                    <span className="checkbox-field"><i className="fa-solid fa-check"></i></span>
                                                </div>
                                                <label for="billing-info">Billing same as Shipping address</label>
                                            </div>
                                        </div>
                                        <div className="mt-6 d-flex">
                                            <button type="submit" className="btn btn-secondary btn-md me-3">Use this Card</button>
                                            <button type="button" className="btn btn-outline-secondary border-secondary btn-md">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="checkout-radio d-flex align-items-center justify-content-between gap-3 bg-white rounded p-4 mt-4">
                                    <div className="radio-left d-inline-flex align-items-center">
                                        <div className="theme-radio">
                                            <input type="radio" id="paypal" />
                                            <span className="custom-radio"></span>
                                        </div>
                                        <label for="paypal" className="ms-2 h6 mb-0">Paypal</label>
                                    </div>
                                    <div className="radio-right text-end">
                                        <img src="assets/img/brands/paypal-black.png" alt="paypal" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="addAddressModal">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

                                            <div className="gstore-product-quick-view bg-white rounded-3 py-6 px-4">
                                                <h2 className="modal-title fs-5 mb-3">Add New Address</h2>
                                                <div className="row align-items-center g-4 mt-3">
                                                    <form action="#">
                                                        <div className="row g-4">
                                                            <div className="col-sm-6">
                                                                <div className="label-input-field">
                                                                    <label>First Name</label>
                                                                    <input type="text" placeholder="Saiful" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="label-input-field">
                                                                    <label>Last Name</label>
                                                                    <input type="text" placeholder="Talukdar" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="label-input-field">
                                                                    <label>Street Address</label>
                                                                    <input type="text" placeholder="Mountain View, California, United States" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="label-input-field">
                                                                    <label>Mobile</label>
                                                                    <input type="tel" placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="label-input-field">
                                                                    <label>Email</label>
                                                                    <input type="email" placeholder="Your Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="label-input-field">
                                                                    <label>Apt Number</label>
                                                                    <input type="text" placeholder="Apart Number" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="label-input-field">
                                                                    <label>State</label>
                                                                    <input type="text" placeholder="Dhaka" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="label-input-field">
                                                                    <label>Zip Code</label>
                                                                    <input type="text" placeholder="Dhaka-1230" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-6 d-flex">
                                                            <button type="submit" className="btn btn-secondary btn-md me-3">Use this Address</button>
                                                            <button type="submit" className="btn btn-outline-secondary border-secondary btn-md">Cancel</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="checkout-sidebar">
                                <div className="sidebar-widget checkout-sidebar py-6 px-4 bg-white rounded-2">
                                    <div className="widget-title d-flex">
                                        <h5 className="mb-0 flex-shrink-0">Order Summery</h5>
                                        <span className="hr-line w-100 position-relative d-block align-self-end ms-1"></span>
                                    </div>
                                    <table className="sidebar-table w-100 mt-5">
                                        <tr>
                                            <td>Items(2):</td>
                                            <td className="text-end">$136,00</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping & handling:</td>
                                            <td className="text-end">$3.99</td>
                                        </tr>
                                        <tr>
                                            <td>Before tax:</td>
                                            <td className="text-end">$336,04</td>
                                        </tr>
                                    </table>
                                    <span className="sidebar-spacer d-block my-4 opacity-50"></span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-0 fs-md">Tax collected</h6>
                                        <h6 className="mb-0 fs-md">$424.00</h6>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-md rounded mt-6 w-100">Place Order</button>
                                    <p className="mt-3 mb-0 fs-xs">By Placing your order your agree to our company <a href="#">Privacy-policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;