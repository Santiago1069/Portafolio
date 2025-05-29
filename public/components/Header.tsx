export default function Header() {
    return (
        <header className="stick">
            <div className="logo-menu-wrapper position-relative w-100">
                <div className="container">
                    <div className="logo-menu-inner d-flex gap-4 align-items-center justify-content-between position-relative w-100">
                        <div className="logo">
                            <h1>
                                <a href="index.html" title="Home">
                                    <img className="scheme1-light-logo" src="assets/images/logo1-light.png" alt="Logo" loading="lazy" />
                                    <img className="scheme2-light-logo position-absolute" src="assets/images/logo2-light.png" alt="Logo" loading="lazy" />
                                    <img className="scheme3-light-logo position-absolute" src="assets/images/logo3-light.png" alt="Logo" loading="lazy" />
                                    <img className="scheme4-light-logo position-absolute" src="assets/images/logo4-light.png" alt="Logo" loading="lazy" />
                                    <img className="scheme5-light-logo position-absolute" src="assets/images/logo5-light.png" alt="Logo" loading="lazy" />
                                    <img className="scheme1-dark-logo position-absolute" src="assets/images/logo1-dark.png" alt="Logo" loading="lazy" />
                                    <img className="scheme2-dark-logo position-absolute" src="assets/images/logo2-dark.png" alt="Logo" loading="lazy" />
                                    <img className="scheme3-dark-logo position-absolute" src="assets/images/logo3-dark.png" alt="Logo" loading="lazy" />
                                    <img className="scheme4-dark-logo position-absolute" src="assets/images/logo4-dark.png" alt="Logo" loading="lazy" />
                                    <img className="scheme5-dark-logo position-absolute" src="assets/images/logo5-dark.png" alt="Logo" loading="lazy" />
                                </a>
                            </h1>
                        </div>

                        <nav>
                            <a className="res-menu-close" href="javascript:void(0);" title="">
                                <i className="fal fa-times"></i>
                            </a>
                            <ul>
                                <li><a href="index.html" title="">Home</a></li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0);" title="">Blog<i className="far fa-angle-down"></i></a>
                                    <ul>
                                        <li><a href="blog.html" title="">Blog</a></li>
                                        <li><a href="blog-detail.html" title="">Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0);" title="">Portfolio<i className="far fa-angle-down"></i></a>
                                    <ul>
                                        <li><a href="portfolio.html" title="">Portfolio</a></li>
                                        <li><a href="portfolio-detail.html" title="">Portfolio Detail</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0);" title="">Pages<i className="far fa-angle-down"></i></a>
                                    <ul>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);" title="">Services<i className="far fa-angle-right"></i></a>
                                            <ul>
                                                <li><a href="services.html" title="">Services</a></li>
                                                <li><a href="service-detail.html" title="">Service Detail</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="hire-me.html" title="">Hire Me</a></li>
                                    </ul>
                                </li>
                                <li><a href="#contact" title="">Contact</a></li>
                            </ul>

                            <div className="cont-info d-inline-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <g>
                                            <path d="M98.5,53.93c...z" />
                                            <path d="M64.78,78.37c...z" />
                                        </g>
                                    </svg>
                                </span>
                                <div className="cont-info-inner d-flex align-items-start flex-column">
                                    <span>Contact Me At:</span>
                                    <a href="tel:(635) 525-4250" title="Call Us">(635) 525-4250</a>
                                </div>
                            </div>
                        </nav>

                        <a className="res-menu-btn" href="javascript:void(0);" title="">
                            <i className="fal fa-align-center"></i>
                        </a>

                        <div className="cont-links d-flex position-relative">
                            <a href="mailto:user@yoursite.com" title="">
                                <i className="far fa-envelope"></i>user@yoursite.com
                            </a>
                            <a href="javascript:void(0);" title="">
                                LETS TALK<i className="far fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
