import React, { useEffect, useState } from 'react';
import './DisplayReview.css'
import { Col, Row } from 'react-bootstrap';

const DisplayReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data =>setReviews(data))
    },[])
    return (
        <div className="container my-5 review-container">
            <Row xs={1} md={2}>
                <Col md={3}>
                    <img className="review-image" src="" alt="" />
                </Col>
                <Col md={9}>
                {
                    reviews.map(review => <div>
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                    </div>)
                }
                </Col>
            </Row>
        </div>
    );
};

export default DisplayReview;