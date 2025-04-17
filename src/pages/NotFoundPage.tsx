import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="not-found py-5 bg-light">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <FaExclamationTriangle size={80} className="text-warning mb-4" />
                        <h1 className="fw-bold display-4" style={{
                            color: "#0F4761"
                        }}>404</h1>
                        <h4 className="mb-3" style={{
                            color: "#0F4761"
                        }}>Page Not Found</h4>
                        <p className="text-muted mb-4">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
                        <Button className='fw-bold text-uppercase' onClick={() => navigate('/')} style={{
                            backgroundColor: "#0F4761",
                            borderColor: "#0F4761"
                        }}>
                            Go to Homepage
                        </Button>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .not-found {
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                }

                .display-4 {
                    font-size: 4rem;
                }

                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 3rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default NotFoundPage;
