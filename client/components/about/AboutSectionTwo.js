import Link from "next/link";
import { useRouter } from "next/router";

const AboutSectionTwo = () => {
    const router = useRouter();

    return (
        <section className="about-us-section pb-120 mt-30">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-5">
                        <div className="about-us-left position-relative">
                            <img src="/assets/img/about/ab-2.png" alt="not found" className="img-fluid" />
                            <div className="exp-box p-3 bg-white rounded-circle position-absolute">
                                <div className="bg-secondary w-100 h-100 rounded-circle d-flex align-items-center justify-content-center flex-column">
                                    <h2 className="text-white">14+</h2>
                                    <span className="h6 text-white">Year's Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-us-right">
                            <div className="section-title-mx mb-6">
                                <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                                    <h6 className="mb-0 gshop-subtitle text-secondary">Why Choose Us</h6>
                                    <span>
                                      <svg width="58" height="10" viewBox="0 0 58 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <line x1="-6.99382e-08" y1="5.2" x2="52" y2="5.2" stroke="#FF7C08" stroke-width="1.6"/>
                                          <path d="M58 5L50.5 9.33013L50.5 0.669872L58 5Z" fill="#FF7C08"/>
                                      </svg>
                                  </span>
                                </div>
                                <h2 className="mb-3">We do not Buy from the Open Market</h2>
                                <p className="mb-0">Compellingly fashion intermandated opportunities and multimedia based fnsparent e-business.</p>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="horizontal-icon-box d-flex align-items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap flex-xxl-nowrap">
                                        <span className="icon-wrapper position-relative flex-shrink-0">
                                          <img src="/assets/img/icons/hand-icon.svg" alt="hand icon" className="img-fluid" />
                                      </span>
                                        <div className="content-right">
                                            <h5 className="mb-3">Trusted Partner</h5>
                                            <p className="mb-0">Compellingly fashion intermandat opportunities e-business fashion intermandated business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="horizontal-icon-box d-flex align-items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap flex-xxl-nowrap">
                                        <span className="icon-wrapper position-relative flex-shrink-0">
                                          <img src="/assets/img/icons/hand-icon.svg" alt="hand icon" className="img-fluid" />
                                      </span>
                                        <div className="content-right">
                                            <h5 className="mb-3">Return Policy</h5>
                                            <p className="mb-0">Compellingly fashion intermandat opportunities e-business fashion intermandated business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="horizontal-icon-box d-flex align-items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap flex-xxl-nowrap">
                                        <span className="icon-wrapper position-relative flex-shrink-0">
                                          <img src="/assets/img/icons/hand-icon.svg" alt="hand icon" className="img-fluid" />
                                      </span>
                                        <div className="content-right">
                                            <h5 className="mb-3">100% Organic Fresh</h5>
                                            <p className="mb-0">Compellingly fashion intermandat opportunities e-business fashion intermandated business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="horizontal-icon-box d-flex align-items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap flex-xxl-nowrap">
                                        <span className="icon-wrapper position-relative flex-shrink-0">
                                          <img src="/assets/img/icons/hand-icon.svg" alt="hand icon" className="img-fluid" />
                                      </span>
                                        <div className="content-right">
                                            <h5 className="mb-3">Secured Payment</h5>
                                            <p className="mb-0">Compellingly fashion intermandat opportunities e-business fashion intermandated business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionTwo;