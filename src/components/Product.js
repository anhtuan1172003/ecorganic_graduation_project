import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../style/Product.css';

export default function Product({ product }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://h36drg-8080.csb.app/products")
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    })
    return (
        <Container>
            {/* <Row>
                {products.map((p) => (
                    <Col key={p.id} xs={12} md={3}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>{p.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
        </Container>
    );
}
