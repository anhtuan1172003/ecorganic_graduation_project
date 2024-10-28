import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Hàm xử lý submit khi nhấn nút Login
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn không cho form reload lại trang

    // Fetch dữ liệu từ server
    fetch("https://h36drg-8080.csb.app/users")
      .then((res) => res.json())
      .then((result) => {
        const user = result.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          // Nếu thông tin hợp lệ, điều hướng đến trang Dashboard
          navigate('/admin/dashboard');
        } else {
          // Xử lý khi thông tin đăng nhập không hợp lệ
          alert("Sai thông tin đăng nhập.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Row>
        <Col col="10" md="6">
          <img src="./brand.png" className="img-fluid" alt="Sample image" />
        </Col>
        <Col col="4" md="6">
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Admin Login</p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="typeUsername"
              className="form-control form-control-lg"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="typePassword"
              className="form-control form-control-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-center text-md-start mt-4 pt-2">
              <Button type="submit" className="btn btn-primary btn-lg">
                Login
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}