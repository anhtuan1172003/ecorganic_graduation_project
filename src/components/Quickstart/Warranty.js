import React from 'react';
import { Container } from 'react-bootstrap';

export default function Warranty() {
    return (
        <div>
            <Container>
            <h2 className='p-5'>Chế Độ Bảo Hành</h2>
            <h4>1. CAM KẾT CHẤT LƯỢNG</h4>
            <ul>
                <li>Giao hàng đúng và đủ số lượng đã đặt.</li>
                <li>Giao sản phẩm đảm bảo chất lượng và quy cách.</li>
            </ul>
            <h4>2. CHẾ ĐỘ BẢO HÀNH</h4>
            <p>Điều kiện bảo hành:</p>
            <ul>
                <li>Khách hàng có clip mở hàng.</li>
                <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển.</li>
                <li>Cửa hàng giao không đúng sản phẩm.</li>
            </ul>
            <p>Quy định đổi trả:</p>
            <p>Nếu đơn hàng đạt điều kiện bảo hành, quý khách có thể lựa chọn 1 trong 2 phương án bảo hành sau:</p>
            <ul>
                <li>Phương án 1: Quý khách lựa chọn 1 trong 1 đổi 1 cho sản phẩm cùng mẫu, cùng size và ngang giá. Nếu sản phẩm đó đã hết hàng, quý khách có thể đổi sang sản phẩm có giá trị tương đương.</li>
                <li>Phương án 2: Nhận hoàn tiền.</li>
            </ul>
            <h4>3. CÁCH BẢO HÀNH</h4>
            <p>Quý khách gửi clip mở hàng qua Fanpage <a href="https://www.facebook.com/ecorganic.vietnam" target="_blank" rel="noopener noreferrer">Ecorganic</a> hoặc liên hệ số điện thoại <a href="tel:0834654200">0834 654 200</a> để nhân viên hỗ trợ đổi trả.</p>
            </Container>
        </div>
    );
}