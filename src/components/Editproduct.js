import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Editproduct() {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();
    const [pName, setPName] = useState("");
    const [pImg, setPImg] = useState("");
    useEffect(() => {

        // Fetch product details
        fetch(`https://h36drg-8080.csb.app/products/${id}`)
            .then(res => res.json())
            .then(product => {
                setPName(product.title);
                setPImg(product.image);
            })
            .catch(error => console.log(error));
    }, [id]);

    function handleUpdate(e) {
        e.preventDefault();
        let message = "";
        let status = true;

        const productData = {
            title: pName,
            image: pImg,
        };

        if (pName.length === 0) {
            message += "Product name is required\n";
            status = false;
        }
        if (!status) {
            alert(message);
        } else {
            const updatedProduct = {
                title: pName,
                image: pImg,
            };
            fetch(`https://h36drg-8080.csb.app/products/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(resp => resp.json())
                .then(productUpdated => {
                    alert("Update success! Id: " + productUpdated.id);
                    navigate("/admin/dashboard/CRUDProduct");
                })
                .catch(err => console.log(err));
        }
    }


    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{ textAlign: "center" }}>Edit Product</h3>
                </Col>
                <hr />
                <Col>
                    <Link to="/admin/dashboard/CRUDProduct">Back to List</Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control value={id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control value={pName} onChange={e => setPName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control value={pImg} as="textarea" rows={3} onChange={e => setPImg(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button onClick={handleUpdate}>Update</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}