import { Row, Col } from 'react-bootstrap';
import "../style/Footer.css";

export default function Footer() {
  return (
    <Row className="footer-container">
      <Row className="footer-left">
        <Col style={{ textAlign: "left", paddingLeft: "5%" }}>
          <h2><img src='brand.png' style={{ maxWidth: '30%' }}></img></h2>
          <p>
            <a href="tel:0834654200" className="footer-link"><i class="bi bi-telephone"></i>0834 654 200</a><br />
            <a href="mailto:Ecorganic.vietnam@gmail.com" className="footer-link"><i class="bi bi-envelope"></i>Ecorganic.vietnam@gmail.com</a><br />
            <a href="https://www.google.com/maps/search/Khu+B1.1+%C3%B4+03,+Thanh+H%C3%A0+Cienco+5+M%C6%B0%E1%BB%9Dng+Thanh/@20.9287506,105.7872885,21z?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="bi bi-geo-alt-fill"></i>Khu B1.1 ô 03, Thanh Hà Cienco 5 Mường Thanh, đường Lê Trọng Tấn, Kiến Hưng, Hà Đông, Hà Nội</a><br />
          </p>
        </Col>
        <Col className="footer-right" style={{alignContent: 'center'}}>
          <h2>
            <a href="https://www.facebook.com/ecorganic.vietnam" target="_blank" rel="noopener noreferrer" className='footer-link'><i class="bi bi-facebook">  </i></a>
            <a href="https://www.instagram.com/ecorganic.vietnam" target="_blank" rel="noopener noreferrer" className='footer-link'><i class="bi bi-instagram">  </i></a>
            <a href="https://www.tiktok.com/@ecorganic.vietnam" target="_blank" rel="noopener noreferrer" className='footer-link'><i class="bi bi-tiktok"> </i></a>
          </h2>
        </Col>
      </Row>
      <p>© Copyright 2024</p>
    </Row>
  );
}