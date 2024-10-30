import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Pay() {
    return (
        <div>
            <Container>
                <Row md={2} sm={1} xs={1}>
                    <Col md={8}>
                        <h2 style={{textAlign: 'center', padding: '3rem'}}>Hướng Dẫn Thanh Toán</h2>
                        <p>Nhằm mang lại trải nghiệm hài lòng và sự an tâm cho Quý khách, Xanh xin gửi tới quý khách quy định mua hàng như sau:</p>
                        <ul>
                            <li>Quý khách vui lòng chuyển khoản 100% giá trị đơn hàng hoặc cọc trước 50.000 VNĐ để ECORGANIC ship COD. </li>
                            <li>
                                <p>Số tài khoản:</p>
                                <p>STK: 0923168588</p>
                                <p>Chủ tài khoản: DANG VAN BAO LINH</p>
                                <p>Tại: Ngân hàng Quân đội MB Bank</p>
                                <p>Nội dung chuyển khoản: Số điện thoại người nhận hàng</p>
                            </li>
                        </ul>
                    </Col>
                    <Col style={{ textAlign: 'center' }} md={4}>
                        <h3 className='p-5'>Mã QR thanh toán</h3>
                        <img src="QRPay.png" alt="QR" style={{ width: '70%' }}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}