import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Careers = () => {
    return (
        <section className="careers-section py-5 bg-white">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <FaBriefcase size={72} className="mb-4" style={{
                            color: "#0F4761"
                        }} />
                        <h3 className="fw-bold" style={{
                            color: "#0F4761"
                        }}>No Career Opportunities :(</h3>
                        <p className="text-muted">Currently, we don’t have any open positions. Please check back later!</p>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .careers-section {
                    min-height: 300px;
                    display: flex;
                    align-items: center;
                }

                h3 {
                    font-size: 1.75rem;
                }

                @media (max-width: 768px) {
                    h3 {
                        font-size: 1.5rem;
                    }

                    .careers-section {
                        padding: 60px 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default Careers;
