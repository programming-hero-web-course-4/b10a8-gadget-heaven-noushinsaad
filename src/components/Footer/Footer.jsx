const Footer = () => {
    return (
        <div className="flex flex-col items-center my-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="font-semibold opacity-70">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="footer py-2 justify-around text-lg text-center">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;