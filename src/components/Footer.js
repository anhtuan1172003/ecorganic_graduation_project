import { Row, Col } from 'react-bootstrap';
import "../style/Footer.css";

export default function Footer() {
  return (
    <Row className="footer-container">
      <Row className="footer-left">
        <Col style={{ textAlign: "left", paddingLeft: "5%" }}>
          <h2><img src='brand.png' style={{ maxWidth: '30%' }}></img></h2>
          <p>
            <a>Công Ty...</a><br />
            <a><i class="bi bi-telephone"></i>0396835513</a><br />
            <a><i class="bi bi-voicemail">+11113131</i></a><br />
          </p>
        </Col>
        <Col className="footer-right">
          <h2><i class="bi bi-google">  </i>
            <i class="bi bi-facebook">  </i>
            <i class="bi bi-linkedin">  </i>
            <i class="bi bi-twitter">  </i>
            <i class="bi bi-youtube">  </i>
            <i class="bi bi-envelope">  </i></h2>
        </Col>
      </Row>
      <p>© Copyright 2023</p>
    </Row>
  );
}