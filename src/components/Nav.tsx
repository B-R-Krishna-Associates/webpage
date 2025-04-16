import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';

const Nav = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#0F4761' }} variant="dark" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          B.R. Krishan & Associates
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <BootstrapNav className="ms-auto gap-3 fw-bold">
            <BootstrapNav.Link href="/" className="text-white">Home</BootstrapNav.Link>
            <BootstrapNav.Link href="/company/" className="text-white">About</BootstrapNav.Link>
            <BootstrapNav.Link href="/strategies/" className="text-white">Services</BootstrapNav.Link>
            <BootstrapNav.Link href="/methodology/" className="text-white">Methodology</BootstrapNav.Link>
            <BootstrapNav.Link href="/blogs/" className="text-white">Blogs</BootstrapNav.Link>
            <BootstrapNav.Link href="/career/" className="text-white">Career</BootstrapNav.Link>
            <BootstrapNav.Link href="/team/" className="text-white">Team</BootstrapNav.Link>
            <BootstrapNav.Link href="/contact/" className="text-white">Contact</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
