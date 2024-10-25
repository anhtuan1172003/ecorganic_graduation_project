import { Row, Col, Container } from "react-bootstrap";
import "../style/MainContent.css";

export default function MainContent() {

    return (
        <Container>
            <Row className="quick-start" sm={2} xs={1} md={4}>
                <Col>
                    <img src="./image/guide.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/pay.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/ship.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/warranty.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
            </Row>
        </Container>
    )
}