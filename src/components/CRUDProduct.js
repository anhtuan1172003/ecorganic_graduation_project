import { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button, Card, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CRUDProduct() {
    const [pName, setPName] = useState("");
    const [pImg, setPImg] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://h36drg-8080.csb.app/products")
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    })

    function handleCreate(e) {
        //ngan chan reload page khi click vao create
        e.preventDefault();
        //check for input
        let message = "";
        let status = true;
        if (pName.length == 0) {
            message += "Product name is required \n";
            status = false;
        }
        if (status == false || message.length > 0)
            alert(message);
        else {
            const newProduct = {
                title: pName,
                image: pImg,
            };

            fetch("https://h36drg-8080.csb.app/products", {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            })
                .then(resp => resp.json())
                .then(productCreated => {
                    alert("Created successful! Id:" + productCreated.id);
                    // Clear form fields
                    setPName("");
                    setPImg("");
                })
                .catch(err => console.log(err));
        }
    }

    function handleDelete(id) {
        if (window.confirm("Do you want to delete?")) {
            fetch("https://h36drg-8080.csb.app/products/" + id, { method: "DELETE" });
            alert("Delete success");
            window.location.reload();
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Table hover bordered striped>
                        <thead>
                            <tr>
                                <th>ID</th><th>Image</th><th>Name</th><th colspan="2">Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.image}</td>
                                        <td>{p.title}</td>
                                        <td>
                                            <Link to={`edit/${p.id}`}>Edit</Link>
                                        </td>
                                        <td>
                                            <Link to='#' onClick={() => handleDelete(p.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col><h3 style={{ textAlign: "center" }}>Create new Product</h3></Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Id</Form.Label>
                        <Form.Control disabled />
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
                        <Button onClick={e => handleCreate(e)}>Create</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}