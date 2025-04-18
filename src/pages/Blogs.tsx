import { Container, Row, Col } from 'react-bootstrap';
import { FaRegNewspaper } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blogs = () => {
    return (
        <section className="blogs-section py-5 bg-white">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <FaRegNewspaper size={72} className="mb-4" style={{
                            color: "#0F4761"
                        }} />
                        <h3 className="fw-bold" style={{
                            color: "#0F4761"
                        }}>No Blogs Available :(</h3>
                        <p className="text-muted">We're working on it. Stay tuned for updates and insights.</p>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .blogs-section {
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

                    .blogs-section {
                        padding: 60px 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blogs;
