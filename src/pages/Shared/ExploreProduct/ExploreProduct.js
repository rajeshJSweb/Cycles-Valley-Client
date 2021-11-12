import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreProduct.css'

const ExploreProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className="mt-5">
            <h3>More Cycles</h3>
            <div className="container my-5">
            <Row xs={1} md={4} className="g-4">
                {
                    products.map(product=><Col>
                        <Card className="ex-container">
                        <Card.Img variant="top" className="ex-image" src={product.img} />
                        <Card.Body>
                        <Card.Text className="text-start bg-warning p-1 product-price">
                                $ {product.price}
                        </Card.Text>
                            <h6 className="text-start">{product.productName}</h6>
                            <div className='button-container'>
                                    <Link to={`/addCart/${product._id}`}>
                                        <Button className="buy-button">Buy Now</Button></Link>
                                <h6>Ratting:</h6>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>)    
                }
            </Row>
            </div>
        </div>
    );
};

export default ExploreProduct;