import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgDB } from "./firebase/Config";
import { v4 } from "uuid";

export default function EditProduct() {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();
    const [pName, setPName] = useState("");
    const [pImg, setPImg] = useState("");
    const [pImgFile, setPImgFile] = useState(null); // state to hold the new image file

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

        if (pName.length === 0) {
            message += "Product name is required\n";
            status = false;
        }
        if (!status) {
            alert(message);
        } else {
            // Function to handle product update with optional image upload
            const updateProduct = (imageUrl) => {
                const updatedProduct = {
                    title: pName,
                    image: imageUrl || pImg, // Use new image URL or keep the old one
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
            };

            // Check if a new image file is selected for upload
            if (pImgFile) {
                const imgRef = ref(imgDB, `images/${v4()}`);
                uploadBytes(imgRef, pImgFile).then(() => {
                    getDownloadURL(imgRef).then((url) => {
                        updateProduct(url); // Update product with new image URL
                    });
                });
            } else {
                // No new image, update product with existing image URL
                updateProduct();
            }
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
                        <Form.Label>Current Image</Form.Label>
                        <img src={pImg} alt="Current Product" width="200px" height="200px" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload New Image</Form.Label>
                        <Form.Control type="file" onChange={e => setPImgFile(e.target.files[0])} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button onClick={handleUpdate}>Update</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}