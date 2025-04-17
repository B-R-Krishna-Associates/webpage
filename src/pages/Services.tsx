import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesImg from '../assets/images/services-img.jpg';
import ServiceImg1 from '../assets/images/service-1.jpg';
import ServiceImg2 from '../assets/images/service-2.jpg';
import ServiceImg3 from '../assets/images/service-3.jpg';
import ServiceImg4 from '../assets/images/service-4.jpg';
import ServiceImg5 from '../assets/images/service-5.jpg';

const services = [
    {
        title: 'FDI, Legal & Compliance',
        description: [
            'Professional legal advice services for both local and international operations.',
            'Managing licenses and government evaluations for you.',
            'Strong consultant team and lawyers to back you up to defend and win over cases.',
            'Strong relationships in the legal sector and with other law firms.',
        ],
        image: ServiceImg1,
    },
    {
        title: 'Accounting, Audit and Assurance',
        description: [
            'Statutory Audit',
            'Internal Audit',
            'Tax Audit',
            'Cost Audit',
            'Assistance on capital market transactions',
            'Corporate reporting improvement',
        ],
        image: ServiceImg2,
    },
    {
        title: 'Consulting, Risk Management & Advisory',
        description: [
            'Internal Audit',
            'Review of Internal Control System',
            'Development of Internal control system',
            'Development of policies & procedural manuals',
            'Review of operational & accounting Manuals (SOPs)',
            'Implementation of accounting software',
        ],
        image: ServiceImg3,
    },
    {
        title: 'Performance Improvement & Research',
        description: [
            'Governance, risk and compliance',
            'Financial effectiveness',
            'IT effectiveness',
            'Corporate Restructuring & Reorganization',
        ],
        image: ServiceImg4,
    },
    {
        title: 'Taxations',
        description: [
            'International tax services',
            'Income Tax',
            'Value Added Tax',
            'Custom Duty',
            'Excise Duty',
            'Corporate & Individual Advisory Services',
        ],
        image: ServiceImg5,
    },
];

const Services = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section text-white position-relative" style={{ backgroundColor: "rgb(2, 29, 41)" }}>
                <img
                    src={ServicesImg}
                    alt="Hero background"
                    className="w-100 hero-img"
                />
                <div className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center px-3">
                        <h1 className="display-4 fw-bold mb-4">Our Services</h1>
                        <p className="lead mb-0">Navigating your business through compliance, audit, and strategic consulting with excellence</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section py-5 bg-light">
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h2 className="text-center fw-bold" style={{
                                color: "#0F4761"
                            }}>Our Main Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        {services.map((service, index) => (
                            <Col key={index} md={6} lg={4} className="mb-4" style={{
                                cursor: "pointer"
                            }}>
                                <Card className="h-100 service-card shadow border-0">
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={service.image}
                                            alt={service.title}
                                            className="service-image"
                                        />
                                        <div className="image-overlay" />
                                    </div>
                                    <Card.Body className="position-relative">
                                        <Card.Title className="fw-bold fs-5 mb-3" style={{
                                            color: "#0F4761"
                                        }}>
                                            {service.title}
                                        </Card.Title>
                                        <ul className="service-list ps-0">
                                            {service.description.map((item, idx) => (
                                                <li key={idx}><i className="fa-solid fa-angles-right"></i> {item}</li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

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

                .service-image {
                    height: 200px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                }

                .card {
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    background: white;
                }

                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to bottom, rgba(2, 45, 65, 0) 0%, rgba(2, 45, 65, 0.15) 100%);
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                }

                .service-list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .service-list li {
                    margin-bottom: 1rem;
                    font-size: 0.93rem;
                    color: #334155;
                    line-height: 1.4;
                    padding-left: 0.5rem;
                }

                .text-primary {
                    color: #022d41 !important;
                }

                @media (max-width: 768px) {
                    .hero-section {
                        height: 300px;
                    }

                    .display-4 {
                        font-size: 2.3rem;
                    }

                    .card {
                        margin: 0 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;
