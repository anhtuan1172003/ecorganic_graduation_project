import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../style/AboutUs.css';

export default function About() {
    return (
        <div>
            <Container className="about-page">

                <Row className="text-center mt-5 mb-3">
                    <Col>
                        <h1 style={{fontSize: '60px'}}>Về Chúng Tôi</h1>
                        <p className="lead" style={{fontSize: '25px', fontStyle: 'bold'}}>Khám phá sứ mệnh và giá trị cốt lõi của Ecorganic</p>
                    </Col>
                </Row>


                <Row className="mb-5">
                    <Col md={6}>
                        <Image src="./AboutUS.png" fluid rounded />
                    </Col>
                    <Col md={6} style={{ alignContent: 'center' }}>
                        <h2>Ecorganic - Tiên phong trong sản phẩm hữu cơ bền vững</h2>
                        <p>
                            Ecorganic là một trong những doanh nghiệp tiên phong trong lĩnh vực sản xuất và phân phối các sản phẩm hữu cơ bền vững tại Việt Nam, với mục tiêu tạo ra sự thay đổi tích cực cho sức khỏe con người và hành tinh.
                        </p>
                        <p>
                            Chúng tôi không chỉ là nhà cung cấp sản phẩm, mà còn là người truyền cảm hứng về lối sống thân thiện với môi trường. Sản phẩm nổi bật là màng bọc thực phẩm vải sáp ong từ 100% vải cotton và sáp ong rừng tự nhiên, thay thế bền vững cho màng bọc nilon truyền thống.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Phần Triết Lý */}
            <Container fluid className="philosophy-section mb-5 p-5 bg-light rounded about-page">
                <Container>
                    <Row >
                        <Col>
                            <h2>Triết Lý Kinh Doanh</h2>
                            <p>
                                Ecorganic hướng tới sự kết nối giữa thiên nhiên và nông nghiệp bền vững. Chúng tôi tự hào mang đến những sản phẩm an toàn, thân thiện và mang đậm giá trị thiên nhiên, với cam kết từ tình yêu môi trường và bảo vệ sức khỏe cộng đồng.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='about-page'>
                {/* Phần cam kết */}
                <Row className="commitments-section text-center">
                    <Col>
                        <h2>Cam Kết Của Chúng Tôi</h2>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={4} className="d-flex align-items-stretch">
                        <Card className="commitment-card">
                            <Card.Body>
                                <Card.Title>Chất Lượng Vượt Trội</Card.Title>
                                <Card.Text>
                                    Sản phẩm của chúng tôi không chỉ là sự lựa chọn an toàn mà còn được sản xuất theo tiêu chuẩn nghiêm ngặt, đảm bảo nguyên liệu từ thiên nhiên không chứa hóa chất độc hại.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex align-items-stretch">
                        <Card className="commitment-card">
                            <Card.Body>
                                <Card.Title>Bảo Vệ Hành Tinh Xanh</Card.Title>
                                <Card.Text>
                                    Mỗi sản phẩm bạn chọn từ Ecorganic giúp giảm thiểu rác thải nhựa và bảo vệ môi trường cho thế hệ sau. Chúng tôi tin rằng hành động nhỏ có thể tạo sự thay đổi lớn.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex align-items-stretch">
                        <Card className="commitment-card">
                            <Card.Body>
                                <Card.Title>Sản Phẩm Hữu Cơ Sáng Tạo</Card.Title>
                                <Card.Text>
                                    Bên cạnh màng bọc thực phẩm, chúng tôi còn phát triển túi vải và nhiều sản phẩm hữu cơ khác để đa dạng hóa sự lựa chọn bền vững của người tiêu dùng.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Phần kết nối cộng đồng */}
                <Row className="community-section text-center mt-5 mb-5">
                    <Col>
                        <h2>Tham Gia Cộng Đồng Ecorganic</h2>
                        <p style={{fontStyle: 'italic'}}>
                            Trở thành một phần của cộng đồng Ecorganic, nơi mỗi người tiêu dùng đều có thể tạo ra sự thay đổi tích cực. Hãy cùng chúng tôi xây dựng một hành tinh xanh, khỏe mạnh và bền vững hơn!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}