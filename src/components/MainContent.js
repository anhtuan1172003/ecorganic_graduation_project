import { Row, Col, Container, Card, Carousel } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/MainContent.css";

export default function MainContent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://h36drg-8080.csb.app/products")
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    })
    // Chia dữ liệu thành các nhóm 4 cards
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedCards = chunkArray(products, 4);


    return (
        <Container>
            <Row className="quick-start" sm={2} xs={1} md={4}>
                <Col className="guide">
                    <Link to="/guide"  style={{ textDecoration: 'none', color: 'black'}}>
                        <img src="./image/guide.png" alt="Hướng Dẫn" />
                        <p>Hướng Dẫn</p>
                    </Link>
                </Col>
                <Col className="pay">
                    <Link to="/pay"  style={{ textDecoration: 'none', color: 'black'}}>
                        <img src="./image/pay.png" alt="Thanh Toán" />
                        <p>Thanh Toán</p>
                    </Link>
                </Col>
                <Col className="ship">
                    <Link to="/ship"  style={{ textDecoration: 'none', color: 'black'}}>
                        <img src="./image/ship.png" alt="Vận Chuyển" />
                        <p>Vận Chuyển</p>
                    </Link>
                </Col>
                <Col className="warranty">
                    <Link to="/warranty"  style={{ textDecoration: 'none', color: 'black'}}>
                        <img src="./image/warranty.png" alt="Bảo Hành" />
                        <p>Bảo Hành</p>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Container>
                    <Carousel autoPlay={true} interval={2000} controls={true} indicators={false} style={{ margin: '0 7% 0 7%' }} id="carousel">
                        {chunkedCards.map((chunk, index) => (
                            <Carousel.Item key={index}>
                                <Row>
                                    {chunk.map((card) => (
                                        <Col key={card.id} xs={12} md={3}>
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={card.image} />
                                                <Card.Body>
                                                    <Card.Title>{card.title}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </Row>
        </Container>
    )
}