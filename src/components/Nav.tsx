import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg'

const Nav = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#0F4761' }} variant="dark" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center gap-2" style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80px',
          backgroundColor: '',
          textWrap: 'wrap',
          alignItems: 'center',
        }}>
          <img src={Logo} alt="Logo" width='100%' style={{
            borderRadius: '5px',
          }}/>
          <p style={{
            fontSize: '12px',
            fontWeight: 'bold',
          }}>B.R. Krishan & Associates</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <BootstrapNav className="ms-auto gap-3 fw-bold">
            <BootstrapNav.Link as={Link} to="/" className="text-white">Home</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/about" className="text-white">About</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/services" className="text-white">Services</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/methodology" className="text-white">Methodology</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/blogs" className="text-white">Blogs</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/careers" className="text-white">Career</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/team" className="text-white">Team</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/contact" className="text-white">Contact</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
