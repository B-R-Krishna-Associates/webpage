import { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Image = {
  url: string;
};

const Home = () => {

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const randomImages = Array.from({ length: 3 }, (_, index) => ({
      url: `https://picsum.photos/seed/pnb${index + 1}/1200/400`,
    }));
    setImages(randomImages);
  }, []);

  const services = [
    {
      title: 'Audit & Assurance',
      description: 'External audit as per statutory requirements and internal reviews.',
    },
    {
      title: 'Taxation and Corporate Law',
      description: 'Corporate & personal tax planning and compliance.',
    },
    {
      title: 'Corporate & Financial Advisory',
      description: 'Restructuring, joint ventures, and strategic financial planning.',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, ExampleCorp',
      message:
        'P. & B. Associates helped us streamline our audit processes. Their attention to detail is impeccable!',
    },
    {
      name: 'Jane Smith',
      title: 'COO, Tech Solutions',
      message:
        'Exceptional service! Their advice has been pivotal in navigating complex tax challenges.',
    },
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="position-relative">
        <Carousel indicators nextLabel="›" prevLabel="‹">
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img.url}
                alt={`Slide ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <style>{`
          .carousel-indicators {
            bottom: 10px;
            justify-content: center;
          }
          .carousel-indicators [data-bs-target] {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #000;
            opacity: 0.5;
          }
          .carousel-indicators .active {
            opacity: 1;
            background-color: #004080;
          }
        `}</style>
      </div>

      {/* About Section */}
      <Container className="py-5" style={{ width: '100%', padding: '0 15px' }}>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <img
              src="https://picsum.photos/seed/about/600/400"
              alt="About"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">About P. & B. Associates</h2>
            <p style={{ lineHeight: '1.8' }}>
              P. & B. Associates, Chartered Accountant; in existence from 2022 under the laws of Nepal;
              is a partnership firm established after two proprietorship firms: Pratik Khanal & Associates (2017)
              and B.G.M. Associates, Chartered Accountants (2021) decided to collaborate. Partners: FCA Pratik Khanal
              and CA Birendra Gharti Magar. Our office is located in Thapagaun, Kathmandu.
            </p>
            <Button variant="outline-primary">Explore More</Button>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision Section */}
      <Container className="py-5" style={{ width: '100%', padding: '0 15px' }}>
        <Row className="align-items-center g-4 flex-md-row-reverse">
          <Col md={6}>
            <img
              src="https://picsum.photos/seed/missionvision/600/450"
              alt="Mission Vision"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">Our Mission & Vision</h3>
            <p>
              To strive for excellence and provide high-quality services adhering to values, principles,
              and the code of ethics per ICAN & The Chartered Accountants Act 1997.
              <br /><br />
              To be a proactive and reliable firm offering complete services in Auditing, Assurance, Advisory,
              and Taxation. We aim to stay ahead in the economy and deliver consistent, prompt quality services
              including outsourced accounting, tax consulting, and payroll.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="py-5" style={{ width: '100%', padding: '0 15px' }}>
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <p className="text-center w-75 mx-auto">
          We provide a full range of professional services in the field of Auditing, Assurance, Advisory,
          and Taxation. Our goal is to support clients with up-to-date knowledge and consistent solutions.
        </p>
        <Row className="mt-4">
          {services.map((service, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100 border p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="link" size="sm">Explore More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="py-5" style={{ width: '100%', padding: '0 15px' }}>
        <h2 className="text-center fw-bold mb-4">What Our Clients Say</h2>
        <Row className="g-4">
          {testimonials.map((testimonial, idx) => (
            <Col md={6} key={idx}>
              <Card className="border p-4">
                <Card.Body>
                  <Card.Text>
                    <i>"{testimonial.message}"</i>
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    <strong>{testimonial.name}</strong><br />
                    <small>{testimonial.title}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Get in Touch Section */}
      <Container className="py-5" style={{ width: '100%', padding: '0 15px' }}>
        <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
        <Row className="g-4">
          <Col md={6}>
            <h5 className="fw-bold">Mail Us:</h5>
            <p>info@pnb.com.np</p>

            <h5 className="fw-bold mt-3">Visit Us:</h5>
            <p>Thapagaun, Kathmandu, Nepal</p>

            <h5 className="fw-bold mt-3">Phone Us:</h5>
            <p>+977-9851205670</p>
          </Col>

          <Col md={6}>
            <div>
              <h5 className="fw-bold text-center mb-3">Send Us a Message</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    className="px-3 py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="px-3 py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Message"
                    className="px-3 py-2"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 px-3 py-3 fw-bold"
                    style={{ background: 'rgb(15, 71, 97)', borderColor: '#003366' }}
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
