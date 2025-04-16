const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F4761', color: '#fff', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          {/* Column 1: Company Info */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h4 className="fw-bold mb-3">B.R. Krishna & Associates</h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              Empowering businesses through expert consulting, trusted strategies, and innovative solutions. Let’s grow together.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/methodology" className="text-white text-decoration-none">Methodology</a></li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li><a href="/blogs" className="text-white text-decoration-none">Blogs</a></li>
              <li><a href="/career" className="text-white text-decoration-none">Career</a></li>
              <li><a href="/team" className="text-white text-decoration-none">Team</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li>
                <a href="https://facebook.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f me-2"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram me-2"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter me-2"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 mt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <p className="mb-0" style={{ fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} B.R. Krishna & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
