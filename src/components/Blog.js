import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../style/Blog.css'

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();
  const handleClick = (postId) => {
    navigate(`/blog/${encodeURIComponent(postId)}`);
  };
  useEffect(() => {
      //GER - URI: http://localhost:9999/movies
      fetch("http://localhost:9999/blogPosts")
          .then(res => res.json())
          .then(result => setBlogPosts(result))
          .catch(error => console.log(error));
  }, []);

    return (
        <Container className="blog-page">
                <h2>Khuyến Mãi Mới</h2>
                <Row>
                    {blogPosts.map((blogPost, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={blogPost.imageSrc} onClick={() => handleClick(blogPost.id)}/>
                                <Card.Body>
                                    <Card.Title onClick={() => handleClick(blogPost.id)}>{blogPost.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>
    );
}