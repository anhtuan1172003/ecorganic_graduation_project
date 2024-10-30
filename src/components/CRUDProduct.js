import { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgDB } from "./firebase/Config";
import { v4 } from "uuid";


export default function CRUDProduct() {
    const [pName, setPName] = useState("");
    const [pImgFile, setPImgFile] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://h36drg-8080.csb.app/products")
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    }, []);

    // Hàm xử lý tạo sản phẩm và tải ảnh lên Firebase
    const handleCreate = async (e) => {
        e.preventDefault();

        let message = "";
        if (pName.length === 0) message += "Product name is required \n";
        if (!pImgFile) message += "Product image is required \n";

        if (message) {
            alert(message);
            return;
        }

        // Tải ảnh lên Firebase và lấy URL
        const imgRef = ref(imgDB, `images/${v4()}`);
        try {
            await uploadBytes(imgRef, pImgFile);
            const imgUrl = await getDownloadURL(imgRef);

            const newProduct = {
                title: pName,
                image: imgUrl,  // Dùng URL ảnh từ Firebase
            };

            // Gửi yêu cầu tạo sản phẩm đến API
            fetch("https://h36drg-8080.csb.app/products", {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            })
                .then(resp => resp.json())
                .then(productCreated => {
                    alert("Created successfully! Id:" + productCreated.id);
                    setProducts(prevProducts => [...prevProducts, productCreated]);
                    setPName("");
                    setPImgFile(null);
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

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
                                <th>ID</th><th>Image</th><th>Name</th><th>Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} alt={p.title} width="50" /></td>
                                    <td>{p.title}</td>
                                    <td>
                                        <Link to={`edit/${p.id}`}>Edit</Link> | 
                                        <Link to="#" onClick={() => handleDelete(p.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 style={{ textAlign: "center" }}>Create New Product</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control value={pName} onChange={e => setPName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image *</Form.Label>
                        <Form.Control type="file" onChange={e => setPImgFile(e.target.files[0])} />
                    </Form.Group>
                    <Button onClick={handleCreate}>Create</Button>
                </Col>
            </Row>
        </Container>
    );
}