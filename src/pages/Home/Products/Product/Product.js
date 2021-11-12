import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, productName,img,price } = props.cycle;
    return (
        <div>
            <Col>
                <Card className="card-container">
                    <Card.Img variant="top" className="card-image" src={img} />
                    <Card.Body>
                    <Card.Text className="text-start bg-warning p-1 product-price">
                            $ {price}
                    </Card.Text>
                        <h6 className="text-start">{productName}</h6>
                        <div className='button-container'>
                            <Link to={`/addCart/${_id}`}><Button onClick={()=> props.AddToCart(props.cycle)} className="buy-button">Buy Now</Button></Link>
                            <h6>Ratting:</h6>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;