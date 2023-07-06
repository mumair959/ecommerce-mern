import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProductList = ({products, categories, state, filterByCategory}) => {
    const router = useRouter();

    const gotoCart = () => {
        if (!state) {
            toast.error("Please login first");
        }
        else{
            router.push('/cart');
        }
    };

    return (
        <section className="gshop-gshop-grid ptb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3">
                        <div className="gshop-sidebar bg-white rounded-2 overflow-hidden">
                            <div className="sidebar-widget search-widget bg-white py-5 px-4">
                                <div className="widget-title d-flex">
                                    <h6 className="mb-0 flex-shrink-0">Search Now</h6>
                                    <span className="hr-line w-100 position-relative d-block align-self-end ms-1"></span>
                                </div>
                                <form className="search-form d-flex align-items-center mt-4">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit" className="submit-icon-btn-secondary"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="sidebar-widget category-widget bg-white py-5 px-4 border-top">
                                <div className="widget-title d-flex">
                                    <h6 className="mb-0 flex-shrink-0">Categories</h6>
                                    <span className="hr-line w-100 position-relative d-block align-self-end ms-1"></span>
                                </div>
                                <ul className="widget-nav mt-4">
                                    <>{categories && categories.map((category) => <li key={category._id}>
                                        <a href="javascript:void(0)" onClick={() => filterByCategory(category._id)} className="d-flex justify-content-between align-items-center">{category._id}<span className="fw-bold fs-xs total-count">{category.count}</span></a>
                                    </li>)}
                                    </>
                                </ul>
                            </div>
                            <div className="sidebar-widget price-filter-widget bg-white py-5 px-4 border-top">
                                <div className="widget-title d-flex">
                                    <h6 className="mb-0 flex-shrink-0">Filter by Price</h6>
                                    <span className="hr-line w-100 position-relative d-block align-self-end ms-1"></span>
                                </div>
                                <div className="at-pricing-range mt-4">
                                    <form className="range-slider-form">
                                        <div className="price-filter-range"></div>
                                        <div className="d-flex align-items-center mt-3">
                                            <input type="text" onInput="validity.valid||(value='0');" className="min_price price-range-field price-input" />
                                            <span className="d-inline-block ms-2 me-2 fw-bold">-</span>
                                            <input type="text" onInput="validity.valid||(value='10000');" className="max_price price-range-field price-input" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm mt-3">Filter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="shop-grid">
                            <div className="listing-top d-flex align-items-center justify-content-between flex-wrap gap-3 bg-white rounded-2 px-4 py-5 mb-6">
                                <div className="listing-top-right text-end d-inline-flex align-items-center gap-3 flex-wrap">
                                    <div className="select-filter d-inline-flex align-items-center gap-3">
                                        <label className="fw-bold fs-xs text-dark flex-shrink-0">Sort by:</label>
                                        <select className="form-select fs-xxs fw-medium theme-select select-sm">
                                            <option>News First</option>
                                            <option>Best Selling</option>
                                            <option>Best Rated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 justify-content-center">
                                <>{products && products.map((product) => <div className="col-lg-4 col-md-6 col-sm-10" key={product._id}>
                                    <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                                        <div className="thumbnail position-relative text-center p-4">
                                            <img src={product.productImage} alt="product" className="img-fluid product-list-img" />
                                        </div>
                                        <div className="card-content">
                                            <div className="mb-2 tt-category tt-line-clamp tt-clamp-1">
                                                <a href="#" className="d-inline-block text-muted fs-xxs">{product.productType}</a>
                                            </div>
                                            <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">{product.name}</a>
                                            <h6 className="price text-danger mb-4">${product.netPrice}</h6>
                                            <button className="btn btn-outline-secondary d-block btn-md w-100" onClick={() => {gotoCart()}}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>)}</>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;