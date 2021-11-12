import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [cycles, setCycles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, []);

    const AddToCart = cycle => {
        const newCart = [...cart, cycle]
        setCart(newCart)
    }
    return (
        <div className="my-5">
            <Row xs={1} md={2}>
                    <Col md={3} className="title">
                        <h2 className="trend">Trending<br /><span className="nearYour">Near YOU</span></h2>
                    </Col>
                <Col md={9} className="mt-2">
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