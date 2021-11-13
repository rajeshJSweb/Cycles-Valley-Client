import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner4 from '../../../image/banner-4.PNG'
import './CycleGuide.css'

const CycleGuide = () => {
    return (
        <div className="guide-container">
            <h2 className="mb-5">CYCLE GUIDE</h2>
            <Row>
                <Col>
                <img className="guid-image"
                    src={banner4}
                    alt="First slide"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default CycleGuide;