import React from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../style/Product.css';

export default function Product() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const products = [
        {
            id: 1,
            name: 'C - Wrap',
            description: 'Màng bọc thực phẩm bằng vải sáp ong hình tròn là thiết kế đặc biệt phù hợp cho cho nhiều kích thước hình dạng bát đĩa. Nó không chỉ giúp giữ cho thức ăn luôn tươi ngon mà còn bảo vệ chúng khỏi vi khuẩn gây hại. Nhờ tính chất đặc biệt, Màng bọc thực phẩm bằng vải sáp ong C - Wrap có thể dễ dàng gấp và uốn nắn chiếc khăn này để bọc kín mọi loại hộp đựng, từ bát cơm nhỏ xinh đến hộp đựng thức ăn lớn. Đồng thời, màng bọc thực phẩm mới này có thể tải sử dụng nhiều lần nên góp phần lớn trong việc bảo vệ môi trường. Với sản phẩm này, việc bảo quản đồ ăn hàng ngày trở nên đơn giản, tiện lợi và hữu ích hơn.',
            shape: 'Hình tròn',
            size: 'Có ba kích thước (S, M, L)',
            sale: 'Bán riêng theo kích thước.\n Được cung cấp theo bộ bao gồm cả ba kích thước, mang đến cho người dùng sự linh hoạt để bảo quản hiệu quả các loại thực phẩm khác nhau.',
            image: '../image/image6.jpg'
        },
        {
            id: 2,
            name: 'S - Wrap',
            description: 'Màng bọc thực phẩm bằng vải sáp ong hình vuông là thiết kế linh hoạt và đa năng, hoàn hảo để bảo quản rau, trái cây và các loại thực phẩm khác. Sản phẩm có thể dễ dàng điều chỉnh và định hình để bao quanh hình dạng cụ thể của thực phẩm, tạo ra môi trường bảo quản tươi mới và an toàn. Đồng thời, màng bọc thực phẩm từ vải sáp ong có thể tải sử dụng nhiều lần nên góp phần lớn trong việc bảo vệ môi trường.',
            shape: 'Hình vuông',
            size: 'Có ba kích thước khác nhau (nhỏ, vừa, lớn)',
            sale: 'Bán riêng theo kích thước.\nCó sẵn dưới dạng bộ bao gồm cả ba kích thước để đáp ứng nhu cầu bảo quản thực phẩm đa dạng trong bếp của người tiêu dùng.',
            image: '../image/image7.jpg'
        },
        {
            id: 3,
            name: 'B - Wrap',
            description: 'Túi bọc sáp ong là lựa chọn tuyệt vời để đựng các loại thực phẩm nhỏ, chẳng hạn như các loại hạt, trái cây cắt sẵn hoặc đồ ăn nhẹ. Được thiết kế với lớp vải sáp ong dày, túi giúp kéo dài độ tươi của thực phẩm, đảm bảo điều kiện bảo quản tối ưu nhất có thể cho thực phẩm.',
            shape: 'Túi',
            size: 'Có ba kích thước khác nhau (nhỏ, vừa, lớn)',
            sale: 'Bán riêng theo kích thước\nCó sẵn dưới dạng bộ ba kích thước, cung cấp cho người dùng đầy đủ các loại túi cho nhiều nhu cầu bảo quản thực phẩm khác nhau.',
            image: '../image/image1.jpg'
        },
    ]

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);


    return (
        <Container className='mt-5 mb-5'>
            <Row>
                {products.map((product, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card
                            onClick={() => handleShow(product)}
                            className="product-card text-center"
                        >
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <Card.Body>
                                <Card.Title className="product-name">
                                    {product.name}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal hiển thị chi tiết sản phẩm */}
            <Modal show={showModal} onHide={handleClose} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {selectedProduct?.image && (
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="img-fluid rounded"
                                />
                            )}
                        </Col>
                        <Col>
                            <p><strong>Hình dạng:</strong> {selectedProduct?.shape}</p>
                            <p><strong>Mô tả:</strong> {selectedProduct?.description}</p>
                            <p><strong>Kích thước:</strong> {selectedProduct?.size}</p>
                            <p><strong>Tuỳ chọn bán hàng:</strong> {selectedProduct?.sale}</p>
                        </Col>
                    </Row>

                </Modal.Body>
            </Modal>
        </Container>
    );
}
