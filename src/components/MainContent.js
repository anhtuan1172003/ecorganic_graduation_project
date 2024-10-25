import { Row, Col, Container, Card, Carousel } from "react-bootstrap";
import { useEffect, useState } from 'react';
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
                    <img src="./image/guide.jpg"></img>
                    <p>Hướng Dẫn</p>
                </Col>
                <Col className="pay">
                    <img src="./image/pay.jpg"></img>
                    <p>Thanh Toán</p>
                </Col>
                <Col className="ship">
                    <img src="./image/ship.jpg"></img>
                    <p>Vận Chuyển</p>
                </Col>
                <Col className="warranty">
                    <img src="./image/warranty.jpg"></img>
                    <p>Bảo Hành</p>
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
                                                <Card.Img variant="top" src={card.image}/>
                                                <Card.Body>
                                                    <Card.Title>{card.title}</Card.Title>
                                                    <Card.Text>{card.price}</Card.Text>
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