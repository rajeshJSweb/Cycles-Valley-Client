import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth([]);
    const [orders, setOrders] = useState([]);
    
    const [control, setControl]=useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control])

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            headers:{"Content-type":"application/json"},
        })
            .then(res => res.json())
            .then(data => {
                // if (data.insertedId !== id) {
                //     alert('Deleted')
                // }
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
    }

    return (
        <div className="container mt-3">
            <h3>All Orders</h3>
            {
                        orders.map(order => <div>
                    <Row sx={1} md={2} className="details-container">
                        <Col md={3}>
                            <img className="order-image" src={order.img} alt="" />
                        </Col>
                        <Col md={9} className="details">
                            <h5>{order.productName}</h5>
                            <Button className='cancel-button' onClick={() => handleDeleteOrder(order._id)}>Cancel Order <span>X</span></Button>
                        </Col>
                    </Row>
                </div>)
                }
        </div>
    );
};

export default MyOrder;