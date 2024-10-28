import { Row, Col, Image, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from "./components/Blog";
import MainContent from "./components/MainContent";
import Product from "./components/Product";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AboutUS from "./components/AboutUs"; 
import './style/App.css';

const banners = [
  { imageSrc: 'banner/banner1.jpeg' },
  { imageSrc: 'banner/banner2.jpeg' },
  { imageSrc: 'banner/banner3.jpeg' },
  { imageSrc: 'banner/banner4.jpeg' },
];

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <Carousel controls={false} indicators={true} style={{ height: '500px', overflow: 'hidden' }} >
            {banners.map((banner, index) => (
              <Carousel.Item key={index}>
                <Image src={banner.imageSrc} style={{ width: '100%', height: '500px' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <MainContent/>
      </Row>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
    // Kiểm tra nếu không phải trang /admin hoặc /admin/dashboard
    const hideHeaderFooter = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Hiển thị Header và Footer nếu không phải trang /admin */}
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/about-us" element={<AboutUS/>} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}