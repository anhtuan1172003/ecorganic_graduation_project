import React from 'react';
import { Container } from 'react-bootstrap';

export default function Guide() {
    return (
        <div>
            <Container>
                <h2 className='p-5'>Hướng Dẫn Mua Hàng</h2>
                <p>Quý khách click vào nút “Liên hệ” màu xanh ở góc dưới bên phải màn hình.</p>
                <p>Sau đó chọn nút “Messenger”. Hệ thống sẽ tự động chuyển sang khung chat với fanpage facebook.</p>
                <p>Quý khách nhắn tin để ECORGANIC phản hồi.</p>
            </Container>
        </div>
    );
}