import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";

const Address = () => {
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
                                    <div className="address-book bg-white rounded p-5">
                                        <div className="row g-6">
                                            <div className="col-md-6">
                                                <div className="address-book-content pe-md-4 border-right position-relative">
                                                    <div className="d-flex align-items-center gap-5 mb-4">
                                                        <h6 className="mb-0">Address Book</h6>
                                                        <a href="#">Edit</a>
                                                    </div>
                                                    <p className="text-uppercase fw-medium mb-3">
                                                        Default Shipping Address
                                                    </p>
                                                    <div className="address">
                                                        <p className="text-dark fw-bold mb-1">Saiful Talukdar</p>
                                                        <p className="mb-0">
                                                            Ghunshe, Muksudpur Dhaka - Gopalganj.
                                                            <br />(+880) 1633082302
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 align-self-end">
                                                <div className="address-book-content ps-md-4">
                                                    <p className="text-uppercase fw-medium mb-3">
                                                        Default Billing Address
                                                    </p>
                                                    <div className="address">
                                                        <p className="text-dark fw-bold mb-1">Saiful Talukdar</p>
                                                        <p className="mb-0">
                                                            Ghunshe, Muksudpur Dhaka - Gopalganj.
                                                            <br />(+880) 1633082302
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Address;