import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Carousel } from 'react-bootstrap';
import { Envelope, GeoAlt, Telephone, ArrowRight } from 'react-bootstrap-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);
            setSubmitted(true);
        }

        setValidated(true);
    };

    return (
        <div className="contact-page">
            {/* Hero Carousel */}
            <Carousel fade controls={false} indicators={false} className="hero-carousel">
                <Carousel.Item>
                    <div
                        className="carousel-slide d-flex align-items-center"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '400px'
                        }}
                    >
                        <Container className="text-center text-white">
                            <h1 className="display-4 fw-bold mb-3">Connect With Us</h1>
                            <p className="lead mb-4">We're here to help and answer any questions you might have</p>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* Contact Section */}
            <section className="py-5" id="contact-form">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col lg={8} className="text-center">
                            <h2 className="display-5 fw-bold mb-3" style={{ color: "#0F4761" }}>Get In Touch</h2>
                            <p className="lead text-muted">
                                Have questions or want to discuss a project? We'd love to hear from you.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4 mb-5">
                        <Col lg={6}>
                            <div className="p-4 p-lg-5 rounded-3 shadow-sm h-100" style={{
                                backgroundColor: "#F8F9FA"
                            }}>
                                <h3 className="h4 mb-4 fw-bold text-uppercase" style={{ color: "#0F4761" }}>Contact Information</h3>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: "#0F4761" }}>
                                        <GeoAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1 fw-bold" style={{
                                            color: "#0F4761"
                                        }}>Our Location</h4>
                                        <p className="text-muted mb-0">123 Business Ave, Suite 456<br />San Francisco, CA 94107</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: "#0F4761" }}>
                                        <Envelope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1 fw-bold" style={{
                                            color: "#0F4761"
                                        }}>Email Us</h4>
                                        <p className="text-muted mb-0">info@company.com<br />support@company.com</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="me-3" style={{ color: "#0F4761" }}>
                                        <Telephone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1 fw-bold" style={{
                                            color: "#0F4761"
                                        }}>Call Us</h4>
                                        <p className="text-muted mb-0">+1 (555) 123-4567<br />Mon-Fri, 9am-5pm</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="p-4 p-lg-5 rounded-3 shadow-sm h-100" style={{
                                backgroundColor: "#F8F9FA"
                            }}>
                                {submitted ? (
                                    <Alert variant="success" className="text-center">
                                        <Alert.Heading>Thank You!</Alert.Heading>
                                        <p>Your message has been sent successfully. We'll get back to you soon.</p>
                                        <Button variant="outline-success" onClick={() => setSubmitted(false)}>
                                            Send Another Message
                                        </Button>
                                    </Alert>
                                ) : (
                                    <>
                                        <h3 className="h4 mb-4 fw-bold text-uppercase" style={{ color: "#0F4761" }}>Send Us a Message</h3>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Enter your name"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide your name.
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Enter your email"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid email.
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formPhone">
                                                <Form.Label>Phone Number (Optional)</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formMessage">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Enter your message"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your message.
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Button type="submit" className="w-100 py-2 fw-bold text-uppercase" style={{
                                                backgroundColor: "#0F4761",
                                                borderColor: "#0F4761"
                                            }}>
                                                Send Message
                                            </Button>
                                        </Form>
                                    </>
                                )}
                            </div>
                        </Col>
                    </Row>

                    <br />

                    {/* Google Maps Section with Header */}
                    <div className="mt-5">
                        <Row className="justify-content-center mb-4">
                            <Col lg={8} className="text-center">
                                <h2 className="display-5 fw-bold text-uppercase" style={{ color: "#0F4761" }}>Our Location</h2>
                                <p className="lead text-muted mt-3">
                                    Visit us at our office or find us on the map
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="rounded-3 overflow-hidden shadow-sm">
                                    <iframe
                                        title="Company Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.158170833327!2d-122.4194155846822!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;