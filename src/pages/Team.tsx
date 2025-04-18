import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamImg from '../assets/images/team-img.jpg';
import Team1  from '../assets/images/team-1.png';

const teamMembers = [
    {
        name: 'CA. Krishna Raj Bhatt',
        role: 'Proprietor',
        image: Team1,
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
    {
        name: 'Bijay Maharjan',
        role: 'Partner',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
    {
        name: 'Aayusha Shrestha',
        role: 'Senior Associate',
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
    {
        name: 'Saurav Shrestha',
        role: 'Associate',
        image: 'https://randomuser.me/api/portraits/men/30.jpg',
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
    {
        name: 'Nisha Adhikari',
        role: 'Account Executive',
        image: 'https://randomuser.me/api/portraits/women/34.jpg',
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
    {
        name: 'Anish Khadka',
        role: 'Junior Analyst',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
        socialLinks: {
            linkedin: '#',
            facebook: '#',
            twitter: '#'
        }
    },
];

const Team = () => {
    return (
        <div>
            {/* Hero Section with Image Tag */}
            <section className="hero-section text-white position-relative" style={{
                backgroundColor: "rgb(2, 29, 41)"
            }}>
                <img
                    src={TeamImg}
                    alt="Hero background"
                    className="w-100 hero-img"
                />
                <div className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center px-3">
                        <h1 className="display-4 fw-bold mb-4">Our Dedicated Team</h1>
                        <p className="lead mb-0">Meet our diverse team of professionals committed to excellence and client success</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-5 bg-light">
                <Container>
                    <Row className="g-4">
                        {teamMembers.map((member, idx) => (
                            <Col key={idx} md={6} lg={4} xl={3}>
                                <Card className="team-card shadow-sm border-0 position-relative overflow-hidden h-100">
                                    <Card.Img
                                        variant="top"
                                        src={member.image}
                                        className="team-img"
                                        alt={member.name}
                                    />
                                    <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                                        <div className="social-icons text-center">
                                            <a href={member.socialLinks.linkedin} className="social-icon">
                                                <FaLinkedin className="icon-hover" />
                                            </a>
                                            <a href={member.socialLinks.facebook} className="social-icon">
                                                <FaFacebook className="icon-hover" />
                                            </a>
                                            <a href={member.socialLinks.twitter} className="social-icon">
                                                <FaTwitter className="icon-hover" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-info position-absolute text-white px-3 py-3 w-100">
                                        <h5 className="mb-0 fw-bold">{member.name}</h5>
                                        <small className="opacity-75">{member.role}</small>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Styles */}
            <style>{`
                /* Hero Styles */
                .hero-section {
                    height: 400px;
                    overflow: hidden;
                }

                .hero-img {
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.3;
                }

                /* Team Styles */
                .team-img {
                    height: 320px;
                    object-fit: cover;
                    transition: all 0.4s ease;
                }

                .team-card:hover .team-img {
                    transform: scale(1.1);
                }

                .team-card {
                    border-radius: 15px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .team-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .team-info {
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(transparent 0%, rgba(15, 71, 97, 0.9) 100%);
                    z-index: 2;
                }

                .overlay {
                    background: rgba(15, 71, 97, 0.85);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .team-card:hover .overlay {
                    opacity: 1;
                }

                .social-icons {
                    display: flex;
                    gap: 20px;
                }

                .social-icon {
                    color: white;
                    font-size: 24px;
                    transition: all 0.3s ease;
                    padding: 10px;
                    border-radius: 50%;
                }

                .icon-hover:hover {
                    color: #80C3E6;
                    transform: scale(1.2);
                }

                @media (max-width: 768px) {
                    .hero-section {
                        height: 300px;
                    }

                    .team-img {
                        height: 250px;
                    }

                    .display-4 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Team;
