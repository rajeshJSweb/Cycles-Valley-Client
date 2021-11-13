import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner1 from '../../image/banner-3.PNG'

const About = () => {
    return (
        <div>
            <Row>
                <Col>
                    <img src={banner1} alt="" />
                    <h2 className="text-success my-5">About Our Company</h2>
                    <p className="container mb-5">Established in 1949 by the Khoksi Group in collaboration with Tube Investments Bangladesh, Cycles Valley has transitioned from just dealing with bicycle manufacture and design to becoming an expert in mobility and well-being solutions. Known best for its flagship bicycle brands –</p>
                </Col>
            </Row>
        </div>
    );
};

export default About;