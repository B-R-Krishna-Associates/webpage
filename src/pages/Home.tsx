import { Container, Row, Col, Carousel, Card, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import crouselImg1 from '../assets/images/crousel-img-1.jpg';
import crouselImg2 from '../assets/images/crousel-img-2.jpg';
import crouselImg3 from '../assets/images/crousel-img-3.jpg';
import HomeAboutImg from '../assets/images/home-about-img.jpg';
import Arrow from '../assets/images/arrow.jpg';
import { Link } from 'react-router-dom';
import Testimonail1 from '../assets/images/testimonial-img-1.jpg';
import Testimonail2 from '../assets/images/testimonial-img-2.jpg'

const Home = () => {

  const services = [
    {
      title: 'Audit & Assurance',
      description: 'External audit as per statutory requirements and internal reviews.',
      icon: '📊'
    },
    {
      title: 'Taxation and Corporate Law',
      description: 'Corporate & personal tax planning and compliance.',
      icon: '💼'
    },
    {
      title: 'Corporate & Financial Advisory',
      description: 'Restructuring, joint ventures, and strategic financial planning.',
      icon: '📈'
    },
  ];

  const testimonials = [
    {
      name: 'Tilak Raj Bhandari',
      title: 'CEO, Pearl Softech',
      message: 'P. & B. Associates helped us streamline our audit processes. Their attention to detail is impeccable!',
      avatar: Testimonail1
    },
    {
      name: 'Nirajan Basnet',
      title: 'CEO, Vista Clothings',
      message: 'Exceptional service! Their advice has been pivotal in navigating complex tax challenges.',
      avatar: Testimonail2
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-section">
        <Carousel slide indicators>
          {[crouselImg1, crouselImg2, crouselImg3].map((img, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 h-100"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-overlay">
                  <Container>
                    <h1 className="display-6 fw-bold text-white">Professional Accounting Solutions</h1>
                    <p className="lead text-white">Trusted financial expertise for your business growth</p>
                    <Link to={'/services'}>
                      <Button variant="primary" className="mt-3">
                        Get Started <FaArrowRight className="ms-2" />
                      </Button>
                    </Link>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <div className="about-image-wrapper position-relative">
                <img
                  src={HomeAboutImg}
                  alt="About"
                  className="img-fluid rounded shadow"
                />
                <div className="experience-badge text-white p-3 rounded shadow">
                  <h3 className="mb-0">1+</h3>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="ps-md-4">
                <span className="text-uppercase text-primary fw-bold">About Us</span>
                <h2 className="fw-bold mb-4">B.R. Krishna & Associates</h2>
                <p className="lead mb-4">
                  Professional Chartered Accountants serving businesses in Nepal since 2024.
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  B.R. Krishna & Associates is a leading firm of Chartered Accountants in Nepal, delivering a full spectrum of audit, advisory, and consulting services. Our vision is to be the recognized leader in professional services
                  with steady growth over the years, we proudly serve a broad and diverse portfolio of clients—from ambitious entrepreneurial ventures to multinational corporations and publicly listed companies—across a wide range of industries.
                  Our firm is built on the core principles of integrity, professionalism, collaboration, and client-centric service.
                </p>
                <div className="mt-4">
                  <Link to={"/services"}>
                    <Button variant="primary" className="me-3">
                      Our Services
                    </Button>
                  </Link>
                  <Link to={'/about'}>
                    <Button variant="outline-primary">
                      Meet Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <div className="pe-md-4">
                <span className="text-uppercase text-primary fw-bold">Our Values</span>
                <h2 className="fw-bold mb-4">Mission & Vision</h2>

                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="mission-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                      <span className="fs-4">🎯</span>
                    </div>
                  </div>
                  <div>
                    <h4>Our Mission</h4>
                    <p className="text-muted">
                      To strive for excellence and provide high-quality services adhering to values, principles,
                      and the code of ethics per ICAN & The Chartered Accountants Act 1997.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-4">
                    <div className="vision-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center">
                      <span className="fs-4">👁️</span>
                    </div>
                  </div>
                  <div>
                    <h4>Our Vision</h4>
                    <p className="text-muted">
                      To be a proactive and reliable firm offering complete services in Auditing, Assurance, Advisory,
                      and Taxation. We aim to stay ahead in the economy and deliver consistent, prompt quality services.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={Arrow}
                alt="Mission Vision"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase text-primary fw-bold">What We Offer</span>
            <h2 className="fw-bold mb-3">Our Services</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <Row className="g-4">
            {services.map((service, idx) => (
              <Col lg={4} md={6} key={idx}>
                <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
                  <Card.Body className="p-4">
                    <div className="service-icon mb-4">
                      <span className="display-4">{service.icon}</span>
                    </div>
                    <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">{service.description}</Card.Text>
                    <Link to={'/services'}>
                      <Button variant="link" className="px-0 text-primary fw-bold">
                        Learn More <FaArrowRight className="ms-2" />
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Link to={'/services'}>
              <Button variant="outline-primary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase text-primary fw-bold">Testimonials</span>
            <h2 className="fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <Row className="g-4">
            {testimonials.map((testimonial, idx) => (
              <Col md={6} key={idx}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex mb-4" style={{
                      alignItems: 'center',
                    }}>
                      <div style={{
                        height: '60px',
                        width: '60px',
                        marginRight: '10px'
                      }}>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          width="100%"
                          height="100%"
                          style={{
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-muted mb-0">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="testimonial-content position-relative">
                      <FaQuoteLeft className="text-primary opacity-25 position-absolute" style={{ top: 0, left: -12, fontSize: '3rem' }} />
                      <Card.Text className="ps-5 mb-0">
                        <i>"{testimonial.message}"</i>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Get in Touch Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={5}>
              <h2 className="fw-bold mb-4 text-uppercase" style={{
                color: "#0F4761"
              }}>Contact Information</h2>
              <p className="lead mb-5">
                Reach out to us for professional accounting services and financial advice.
              </p>

              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent border-secondary px-0 py-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold" style={{
                        color: "#0F4761"
                      }}>Our Location</h5>
                      <p className="mb-0">Baneshwor, Kathmandu, Nepal</p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="bg-transparent border-secondary px-0 py-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold" style={{
                        color: "#0F4761"
                      }}>Email Us</h5>
                      <p className="mb-0">ca.bhatt@gmail.com</p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="bg-transparent border-secondary px-0 py-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold" style={{
                        color: "#0F4761"
                      }}>Call Us</h5>
                      <p className="mb-0">+977-9866702652</p>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>

              <div className="mt-5">
                <h5 className="mb-3 fw-bold text-uppercase" style={{
                  color: "#0F4761"
                }}>Business Hours</h5>
                <p className="mb-1">Sunday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </Col>

            <Col lg={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="fw-bold mb-4 text-center text-uppercase" style={{
                    color: "#0F4761"
                  }}>Send Us a Message</h3>
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your name"
                            className="px-3 py-2"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mt-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        className="px-3 py-2"
                      />
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Your message"
                        className="px-3 py-2"
                      />
                    </Form.Group>

                    <div className="text-center mt-4">
                      <Button
                        variant="primary"
                        type="submit"
                        className="px-4 py- fw-bold w-100 text-uppercase"
                      >
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Custom CSS */}
      <style>{`
  .home-page {
    overflow-x: hidden;
  }

  .hero-section {
    position: relative;
  }

  .carousel-image-container {
    position: relative;
    height: 500px;
    overflow: hidden;
    background-color:rgb(2, 29, 41);
  }

  .carousel-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }

  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 15%; /* Added to prevent overlap with carousel controls */
  }

  .btn-primary {
    background-color: #0F4761 !important;
    border-color: #0F4761 !important;
  }

  .btn-outline-primary {
    color: #0F4761 !important;
    border-color: #0F4761 !important;
  }

  .btn-outline-primary:hover {
    background-color: #0F4761 !important;
    color: white !important;
  }

  .text-primary {
    color: #0F4761 !important;
  }

  .about-image-wrapper {
    position: relative;
  }

  .experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    font-weight: bolder;
    width: fit-content;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #0F4761 !important;
    
  }

  .mission-icon,
  .vision-icon {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }

  .service-icon {
    transition: transform 0.3s ease;
  }

  .hover-shadow:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
  }

  .hover-shadow:hover .service-icon {
    transform: scale(1.1);
    transform: rotate(5deg)
  }

  .transition-all {
    transition: all 0.3s ease;
  }

  @media (max-width: 767.98px) {
  .carousel-image-container {
    height: 200px; /* Decrease height on mobile */
    min-height: 300px; /* Ensure minimum height is set */
  }

  .carousel-image-container img {
    height: 100%; /* Ensure image covers the container but does not overflow */
    object-fit: cover; /* Keep image aspect ratio intact */
  }

  .carousel-overlay {
    display: none
  }
}

`}</style>

    </div >
  );
};

export default Home;