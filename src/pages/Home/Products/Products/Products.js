import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [cycles, setCycles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, []);

    const AddToCart = cycle => {
        const newCart = [...cart, cycle]
        setCart(newCart)
    }
    return (
        <div className="mt-5">
            <Row xs={1} md={2}>
                    <Col md={2}>
                        <h3>Trending Near You</h3>
                    </Col>
                <Col md={10}>
                    <Row xs={1} md={3} className="g-4">
                    {
                            cycles.map(cycle => <Product
                                cycle={cycle}
                                AddToCart={ AddToCart}
                            ></Product>)
                    }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Products;