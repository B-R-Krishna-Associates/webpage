import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEye, FaBullseye, FaUsers, FaUserTie, FaShieldAlt } from 'react-icons/fa';
import AboutHero from '../assets/images/about-hero.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-white position-relative" style={{ backgroundColor: "rgb(2, 29, 41)" }}>
        <img
          src={AboutHero}
          alt="Hero background"
          className="w-100 hero-img"
        />
        <div className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="text-center px-3">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead">B.R. Krishna & Associates – Chartered Accountants in Nepal</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Container className="py-5">
        <Row>
          <Col md={12}>
            <h2 className="fw-bold mb-4">Who We Are</h2>
            <p>
              B.R. Krishna & Associates is a leading firm of Chartered Accountants in Nepal, delivering a full spectrum
              of audit, advisory, and consulting services. Our vision is to be the recognized leader in professional
              services by:
            </p>
            <ul>
              <li>Fostering an inspiring and empowering work environment for our people</li>
              <li>Providing innovative and value-driven advisory solutions to our clients</li>
              <li>Achieving outstanding financial performance with integrity</li>
            </ul>
            <p>
              With steady growth over the years, we proudly serve a broad and diverse portfolio of clients—from
              ambitious entrepreneurial ventures to multinational corporations and publicly listed companies—across a
              wide range of industries.
            </p>
            <p>
              Our firm is built on the core principles of integrity, professionalism, collaboration, and client-centric
              service. Our team comprises carefully selected professionals who are benchmarked against the highest
              standards in the industry.
            </p>
            <p>
              We are deeply committed to nurturing talent within our firm and building long-term, trust-based
              relationships with our clients. Beyond business, we value community engagement and strive to make a
              meaningful impact in people’s lives.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Vision & Mission Cards */}
      <Container className="p-5 bg-light">
        <Row className="gy-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaEye className="me-3 text-primary" size={24} />
                  <Card.Title className="fw-bold mb-0">Our Vision</Card.Title>
                </div>
                <Card.Text>
                  To be the most trusted and respected professional services firm in Nepal, delivering excellence and
                  innovation with every engagement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaBullseye className="me-3 text-success" size={24} />
                  <Card.Title className="fw-bold mb-0">Our Mission</Card.Title>
                </div>
                <Card.Text>
                  To provide our clients with forward-thinking audit, tax, and advisory services through a dedicated team
                  of professionals who value integrity, efficiency, and strong client relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container className="py-5">
        <h2 className="fw-bold mb-4 text-center">Why Choose B.R. Krishna & Associates?</h2>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <FaUsers size={40} className="text-info mb-3" />
                <Card.Title className="fw-bold">Client-Centric Approach</Card.Title>
                <Card.Text>
                  We listen, understand, and act with your best interests in mind, ensuring tailor-made solutions for your
                  business challenges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <FaUserTie size={40} className="text-warning mb-3" />
                <Card.Title className="fw-bold">Expert Team</Card.Title>
                <Card.Text>
                  Our professionals are highly qualified and bring deep knowledge and industry experience to every
                  engagement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <FaShieldAlt size={40} className="text-danger mb-3" />
                <Card.Title className="fw-bold">Reliable & Ethical</Card.Title>
                <Card.Text>
                  We are committed to integrity, transparency, and ethical practices in every aspect of our service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hero-section {
          height: 400px;
          overflow: hidden;
        }

        .hero-img {
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default About;
