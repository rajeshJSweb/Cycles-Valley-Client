import Button from '@restart/ui/esm/Button';
import './ManageOrder.css'
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ManageMyOrder = ({ order }) => {
    const { productName, img } = order;

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            headers:{"Content-type":"application/json"},
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId !== id) {
                    alert('Deleted')
                }
            })
    }

    return (
        <div>
            <Row sx={1} md={2} className="details-container">
                <Col md={3}>
                    <img className="order-image" src={order?.img} alt="" />
                </Col>
                <Col md={9} className="details">
                    <h5>{order?.productName}</h5>
                    <Button className='cancel-button' onClick={() => handleDeleteOrder(order?._id)}>Cancel Order <span>X</span></Button>
                </Col>
            </Row>
        </div>
    );
};

export default ManageMyOrder;