import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Row sx={1} md={3} className="g-3 footer">
                <Col md={4} className="footer-logo">
                    <h3>Cycle Valley</h3>
                </Col>
                <Col md={4} className="footer-item">
                    <h6 className='item'>OUR SERVICES</h6>
                    <ul>
                        <li className="li-item2">Home Delivery</li>
                        <li className="li-item2">International Shipping</li>
                        <li className="li-item2">Online Paymet</li>
                    </ul>
                </Col>
                <Col md={4} className="footer-item">
                    <h6 className='item'>ABOUT US</h6>
                    <ul>
                        <li className="li-item2">Who we are</li>
                        <li className="li-item2">Careers</li>
                        <li className="li-item2">Made in Bangladesh</li>
                        <li className="li-item2">Contact Us</li>
                    </ul>
                </Col>
           </Row>
        </div>
    );
};

export default Footer;