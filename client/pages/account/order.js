import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";

const Order = () => {
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
                                <div className="recent-orders bg-white rounded py-5">
                                    <h6 className="mb-4 px-4">Recent Orders</h6>
                                    <div className="table-responsive">
                                        <table className="order-history-table table">
                                            <tbody>
                                                <tr>
                                                    <th>Order Number#</th>
                                                    <th>Placed on</th>
                                                    <th>Method</th>
                                                    <th>Items</th>
                                                    <th>Total</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>635981586200289</td>
                                                    <td>03/12/2022</td>
                                                    <td>COD</td>
                                                    <td className="thumbnail">
                                                        <img src="/assets/img/products/cauliflower-xs.png" alt="product" />
                                                    </td>
                                                    <td className="text-secondary">$105.60</td>
                                                    <td className="text-center">
                                                        <a href="#" className="view-invoice fs-xs">
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </td>
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

export default Order;