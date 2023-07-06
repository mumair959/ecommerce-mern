import Link from "next/link";
import { useRouter } from "next/router";

const MainBanner = () => {
    const router = useRouter();

    return (
        <section className="gshop-hero pt-120 bg-white position-relative z-1 overflow-hidden">
            <img src="/assets/img/shapes/leaf-shadow.png" alt="leaf" className="position-absolute leaf-shape z--1 rounded-circle" />
            <img src="/assets/img/shapes/mango.png" alt="mango" className="position-absolute mango z--1" data-parallax='{"y": -120}' />
            <img src="/assets/img/shapes/hero-circle-sm.png" alt="circle" className="position-absolute hero-circle circle-sm z--1" />
            <div className="container">
                <div className="gshop-hero-slider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide gshop-hero-single">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-5 col-lg-8">
                                    <div className="hero-left-content">
                                        <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                                        <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                                        <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                                        <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                                            <Link href="/shop" className="btn btn-secondary">
                                                Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                            <Link href="/about" className="btn btn-primary">
                                                About Us<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                                        <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                                        <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                                        <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                                        <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                                        <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide gshop-hero-single">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-5 col-lg-8">
                                    <div className="hero-left-content">
                                        <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                                        <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                                        <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                                        <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                                            <Link href="/shop" className="btn btn-secondary">
                                                Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                            <Link href="/about" className="btn btn-primary">
                                                About Us<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                                        <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                                        <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                                        <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                                        <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                                        <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide gshop-hero-single">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-5 col-lg-8">
                                    <div className="hero-left-content">
                                        <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                                        <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                                        <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                                        <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                                            <Link href="/shop" className="btn btn-secondary">
                                                Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                            <Link href="/about" className="btn btn-primary">
                                                About Us<span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                                        <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                                        <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                                        <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                                        <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                                        <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gshop-hero-slider-pagination theme-slider-control position-absolute top-50 translate-middle-y z-5"></div>
        </section>
    );
}

export default MainBanner;