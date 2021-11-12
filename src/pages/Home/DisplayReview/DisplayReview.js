import React, { useEffect, useState } from 'react';
import './DisplayReview.css'
import { Card, Col, Row } from 'react-bootstrap';

const DisplayReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/review')
            .then(res => res.json())
            .then(data =>setReviews(data))
    },[])
    return (
        <div className=" my-5 review-container">
            <h3>CUSTOMERS WE CARE</h3>
            <Card className='container'>
                <Card.Body>
                    {
                        reviews.map(review => <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {review.reviewDetails}{' '}
                        </p>
                        <footer className="blockquote-footer">
                                by <cite title="Source Title">{ review.userName}</cite><br />
                                <cite title="Source Title"><small>{ review.email}</small></cite>
                        </footer>
                        </blockquote>)
                    }
                </Card.Body>
                </Card>
        </div>
    );
};

export default DisplayReview;