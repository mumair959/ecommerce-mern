import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";

const Tracking = () => {
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
                                    <div className="order-tracking-wrap bg-white rounded py-5 px-4">
                                        <h6 className="mb-4">Order Tracking</h6>
                                        <ol id="progress-bar">
                                            <li className="fs-xs tt-step tt-step-done">Pending</li>
                                            <li className="fs-xs tt-step tt-step-done">Processing</li>
                                            <li className="fs-xs tt-step active">On the Way</li>
                                            <li className="fs-xs tt-step">Delivered</li>
                                        </ol>
                                        <div className="table-responsive-md mt-5">
                                            <table className="table table-bordered fs-xs">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Date & Time</th>
                                                        <th scope="col">Status Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 14 Feb 2023 - 13:19 </td>
                                                        <td>Your package has been delivered. Thank
                                                            you for shopping at Grostore!</td>
                                                    </tr>
                                                    <tr>
                                                        <td> 13 Feb 2023 - 13:39</td>
                                                        <td>Your package has been handed over to
                                                            Grostore Delivery.</td>
                                                    </tr>
                                                    <tr>
                                                        <td> 12 Feb 2023 - 14:50</td>
                                                        <td>Your package has been packed and is
                                                            being handed over to a logistics partner</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 Feb 2023 - 13:05</td>
                                                        <td>Your order has been successfully
                                                            verified.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 Feb 2023 - 13:05</td>
                                                        <td>Thank you for shopping at GroStore! Your
                                                            order is being verified.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Tracking;