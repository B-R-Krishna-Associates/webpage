import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaUserTie, FaGlobe, FaHistory, FaChartLine, FaHandsHelping, FaBuilding } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* About Us Header Section */}
      <section className="py-5 bg-gradient text-white text-center">
        <Container>
          <h2 className="display-4 fw-bold text-uppercase">About B.R. Krishna & Associates</h2>
          <p className="lead mb-4">Innovating Financial Solutions with Integrity and Excellence</p>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">Company Overview</h3>
              <p>
                Founded in 2022, B.R. Krishna & Associates is a full-service Chartered Accountancy firm based in Nepal. Our mission is to provide expert financial guidance through a comprehensive suite of services including auditing, taxation, financial advisory, and consultancy. With a client-centric approach, we serve businesses of all sizes, including multinational corporations, non-profits, and startups.
              </p>
              <p>
                Our team combines expertise with innovation, ensuring that every client receives customized solutions tailored to their unique needs. We continuously invest in technology and research to stay ahead of the industry.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="https://picsum.photos/seed/brkcompanyoverview/600/400"
                alt="Company Overview"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Leadership Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h3 className="fw-bold mb-4">Our Leadership Team</h3>
              <p className="text-muted">
                At the core of B.R. Krishna & Associates is a team of visionary leaders committed to transforming the financial sector.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <Card className="shadow-lg border-0 rounded-3">
                <FaUserTie className="display-4 mb-3 text-primary" />
                <Card.Body>
                  <Card.Title className="fw-bold">Mr. B.R. Krishna</Card.Title>
                  <Card.Subtitle className="text-muted">Founder & Managing Partner</Card.Subtitle>
                  <Card.Text>
                    With over 30 years of experience in financial services, Mr. Krishna's visionary leadership has guided B.R. Krishna & Associates to become a leader in Nepal’s accounting and consultancy space.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card className="shadow-lg border-0 rounded-3">
                <FaUserTie className="display-4 mb-3 text-primary" />
                <Card.Body>
                  <Card.Title className="fw-bold">Ms. Aarti Joshi</Card.Title>
                  <Card.Subtitle className="text-muted">Director of Finance & Strategy</Card.Subtitle>
                  <Card.Text>
                    Ms. Joshi brings her expertise in global finance strategies, shaping innovative solutions that help businesses grow and thrive in an ever-changing market.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card className="shadow-lg border-0 rounded-3">
                <FaUserTie className="display-4 mb-3 text-primary" />
                <Card.Body>
                  <Card.Title className="fw-bold">Mr. Shankar Pandey</Card.Title>
                  <Card.Subtitle className="text-muted">Director of Operations</Card.Subtitle>
                  <Card.Text>
                    Mr. Pandey ensures that our firm operates smoothly, overseeing every internal function to maintain efficiency and quality client service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Milestones Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h3 className="fw-bold mb-4">Our Milestones</h3>
              <p className="lead text-muted">
                A journey built on trust, innovation, and unwavering commitment to excellence.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="timeline">
                <div className="timeline-item">
                  <h5 className="fw-bold">2022: The Beginning</h5>
                  <p>Founded with a vision to deliver unmatched financial services across Nepal and beyond.</p>
                </div>
                <div className="timeline-item">
                  <h5 className="fw-bold">2023: Expanding Our Reach</h5>
                  <p>Opened offices in key cities across Nepal, allowing us to serve a broader client base.</p>
                </div>
                <div className="timeline-item">
                  <h5 className="fw-bold">2024: International Clients</h5>
                  <p>Served clients from across the globe, marking a significant milestone in our international expansion.</p>
                </div>
                <div className="timeline-item">
                  <h5 className="fw-bold">2025: Tech-Driven Transformation</h5>
                  <p>Embraced the latest in AI and data analytics to provide cutting-edge solutions to clients.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Global Reach Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">Global Reach</h3>
              <p>
                With clients across continents and industries, B.R. Krishna & Associates is a trusted partner for businesses worldwide. Our cross-border expertise enables us to offer international-standard services while maintaining a deep understanding of local markets.
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <FaGlobe className="display-4 text-primary" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Expertise Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h3 className="fw-bold mb-4">Our Expertise</h3>
              <p className="lead text-muted">
                Offering a diverse range of financial services designed to meet every business need.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <FaChartLine className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Business Strategy</h5>
              <p className="text-muted">We offer strategic guidance to help businesses scale effectively and efficiently.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaHandsHelping className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Financial Advisory</h5>
              <p className="text-muted">Our expert advisors offer actionable insights that help businesses manage finances better.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaBuilding className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Corporate Structuring</h5>
              <p className="text-muted">We assist companies in creating efficient structures to optimize their financial outcomes.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Core Values Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h3 className="fw-bold mb-4">Our Core Values</h3>
              <p className="text-muted">
                We are guided by values that ensure the highest level of professionalism, trust, and client satisfaction.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <FaHistory className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Integrity</h5>
              <p className="text-muted">We maintain transparency and honesty in every interaction with our clients.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaHistory className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Innovation</h5>
              <p className="text-muted">We are committed to staying at the forefront of financial technology and solutions.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaHistory className="display-4 mb-3 text-primary" />
              <h5 className="fw-bold">Excellence</h5>
              <p className="text-muted">We strive for excellence in everything we do, ensuring that our clients receive top-tier service.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-gradient text-white text-center">
        <Container>
          <h3 className="fw-bold mb-4">Let's Work Together</h3>
          <p className="lead mb-4">Partner with us to drive your business forward with tailored financial solutions.</p>
          <Button variant="outline-light" size="lg" className="px-4 py-2 rounded-pill">Contact Us Today</Button>
        </Container>
      </section>
    </>
  );
};

export default About;
