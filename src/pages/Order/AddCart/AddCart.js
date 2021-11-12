import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Review from '../../Home/Review/Review';
import './AddCart.css'

const AddCart = () => {
    const { _id } = useParams()
    const [cycleDetails, setCycleDetails] = useState([]);
    const [singleCycle, setSingleCycle] = useState({});

    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setCycleDetails(data))
    }, []);

    useEffect(() => {
        const findCycle = cycleDetails.find(cycle => cycle._id == _id)
        setSingleCycle(findCycle)
    },[cycleDetails])
    return (
        <div className="container my-5">
            <Row xs={1} md={2}>
                <Col>
                    <Card className="mt-5 me-5">
                        <Card.Img variant="top" src={singleCycle?.img} />
                    </Card>
                </Col>
                <Col>
                    <div className="details-container">
                        <h4>{singleCycle?.productName}</h4>
                        <p className="pb-3 text-dark">Reference: 8591123 { singleCycle?._id}</p>
                        <div className="price-container">
                            <h5 className="price bg-warning">${ singleCycle?.price}</h5>
                        </div>
                        <div className='essen-container'>
                            <h5>Essential Accessories</h5>
                        </div>
                        <div className='delivery-container'>
                            <h6>Home Delivery by Monday, 22nd Nov</h6>
                            <small>Order before 6:00PM</small>
                        </div>
                        <Link to={`/orderConfirm/${_id}`}><Button className="btn btn-warning fw-bold mt-5">Confirm Order</Button></Link>
                    </div>
                </Col>
            </Row>
        <div className="mt-5">
            <Row sx={1} md={2} className="g-4">
             <Col>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Made For</Card.Title>
                    <Card.Text>
                        {singleCycle?.details}
                    </Card.Text>
                    <Button variant="primary">See Details</Button>
                    </Card.Body>
                     </Card>
                </Col>
             <Col>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Technical Information</Card.Title>
                    <Card.Text>
                        {singleCycle?.techInfo}
                    </Card.Text>
                    <Button variant="primary">Now More</Button>
                    </Card.Body>
                     </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default AddCart;