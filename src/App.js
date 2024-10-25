import { Row, Col, Image, Carousel } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./components/Blog";
import MainContent from "./components/MainContent";
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
          <Carousel style={{ height: '500px', overflow: 'hidden' }}>
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

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}