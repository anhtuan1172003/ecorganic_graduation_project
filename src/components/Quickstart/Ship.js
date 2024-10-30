import React from 'react';
import { Container } from 'react-bootstrap';


export default function Ship() {
    return (
        <div>
            <Container>
                <h2 style={{textAlign: 'center', padding: '3rem'}}>Chính Sách Vận Chuyển</h2>
                <h4>1. Phí vận chuyển...</h4>
                <p style={{textIndent: '20px'}}>Đối với đơn hàng có tổng giá trị trên 300.000 VNĐ, ECORGANIC sẽ miễn phí vận chuyển toàn quốc.</p>
                <p></p>
                <p style={{textIndent: '20px'}}>Đối với đơn hàng có giá trị dưới 300.000 VNĐ, phí vận chuyển được tính theo cước vận chuyển của GiaoHangTietKiem</p>
                <h4>2. Thời gian giao hàng...</h4>
                <p style={{textIndent: '20px'}}>Đối với các đơn hàng nội thành Hà Nội: Đơn hàng đặt trước 15h sẽ giao vào sáng hôm sau.</p>
                <p></p>
                <p style={{textIndent: '20px'}}>Đối với các đơn hàng ngoại thành Hà Nội và các tỉnh khác: Đơn hàng được giao bởi đơn vị Giaohangtietkiem, thời gian giao khoảng 2 – 4 ngày.</p>
                <h4>3. Lưu ý</h4>
                <p style={{textIndent: '20px'}}>Quý khách có thể yêu cầu giao gấp hoặc chỉ định đơn vị giao hàng khác, ECORGANIC sẽ thu thêm phụ phí.</p>
                <p></p>
                <p style={{textIndent: '20px'}}>Để kiểm tra thông tin hoặc tình trạng đơn hàng, quý khách vui lòng nhắn tin Fanpage <a href="https://www.facebook.com/ecorganic.vietnam" target="_blank" rel="noopener noreferrer">tại đây</a>.</p>
                <p></p>
                <p style={{textIndent: '20px'}}>Khi nhận hàng, quý khách vui lòng quay clip mở hàng và gửi ECORGANIC để kích hoạt chế độ bảo hành.</p>
            </Container>
        </div>
    );
}