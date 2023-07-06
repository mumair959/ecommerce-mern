import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const TopProduct = ({
    activeCategory, 
    setActiveCategory,
    topProducts,
    setTopProducts
    }) => {
    const router = useRouter();

    const updateTopProducts = async (type) => {
        setActiveCategory(type);
        const {data} = await axios.get('/product/top-products/'+type);
        setTopProducts(data);
    };

    return (
        <section className="pt-8 pb-100 bg-white position-relative overflow-hidden z-1 trending-products-area">
            <img src="assets/img/shapes/garlic.png" alt="garlic" className="position-absolute garlic z--1" data-parallax='{"y": 100}' />
            <img src="assets/img/shapes/carrot.png" alt="carrot" className="position-absolute carrot z--1" data-parallax='{"y": -100}' />
            <img src="assets/img/shapes/mashrom.png" alt="mashrom" className="position-absolute mashrom z--1" data-parallax='{"x": 100}' />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="section-title text-center text-xl-start">
                            <h3 className="mb-0">Top Products</h3>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="filter-btns gshop-filter-btn-group text-center text-xl-end mt-4 mt-xl-0">
                            <button className={activeCategory == 'All' ? "active" : ''} onClick={() => updateTopProducts('All')}>All Products</button>
                            <button className={activeCategory == 'Fruits' ? "active" : ''} onClick={() => updateTopProducts('Fruits')}>Fruits</button>
                            <button className={activeCategory == 'Vegetables' ? "active" : ''} onClick={() => updateTopProducts('Vegetables')}>Vegetables</button>
                            <button className={activeCategory == 'Meat' ? "active" : ''} onClick={() => updateTopProducts('Meat')}>Meat</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-4 mt-5 filter_group">
                    <>{topProducts && topProducts.map((topProduct) => <div key={topProduct._id} className="col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item">
                        <div className="vertical-product-card rounded-2 position-relative">
                            <div className="thumbnail position-relative text-center p-4">
                                <a href="product-details.html"><img src={topProduct.productImage} alt="apple" className="img-fluid top-product-img" /></a>
                            </div>
                            <div className="card-content">
                                <a href="shop-grid.html" className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">{topProduct.productType}</a>
                                <a href="product-details.html" className="card-title fw-bold d-block mb-2">{topProduct.name}</a>
                                <h6 className="price text-danger mb-3">${topProduct.netPrice}</h6>
                            </div>
                            <div className="card-btn bg-white">
                                <a href="#" className="btn btn-secondary d-block btn-md rounded-1">Add to Cart</a>
                            </div>
                        </div>
                    </div>)}</>

                </div>
            </div>
        </section>
    );
}

export default TopProduct;