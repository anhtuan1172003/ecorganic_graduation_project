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
import CRUDProduct from "./components/CRUDProduct";
import Editproduct from "./components/Editproduct";
import Guide from "./components/Quickstart/Guide";
import Pay from "./components/Quickstart/Pay";
import Ship from "./components/Quickstart/Ship";
import Warranty from "./components/Quickstart/Warranty";

const banners = [
  { imageSrc: 'banner/banner1.png' },
  { imageSrc: 'banner/banner3.png' },
];

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <Carousel controls={true} indicators={true} style={{ height: '100%', overflow: 'hidden' }} >
            {banners.map((banner, index) => (
              <Carousel.Item key={index}>
                <Image src={banner.imageSrc} style={{ width: '100%', height: '100%' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <MainContent />
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
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Product />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="admin/dashboard/crudproduct" element={<CRUDProduct />} />
          <Route path="admin/dashboard/crudproduct/edit/:id" element={<Editproduct />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="rightbar">
        {/* Các thành phần khác trong RightBar */}

        {/* Messenger Icon */}
        <a
          href="https://www.facebook.com/messages/t/445935431934766/"
          target="_blank"
          rel="noopener noreferrer"
          className="messenger-icon-link"
        >
          <i class="bi bi-messenger"></i>
        </a>
      </div>
      <AppContent />
    </BrowserRouter>
  );
}