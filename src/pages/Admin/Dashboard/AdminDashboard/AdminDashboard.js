import Button from '@restart/ui/esm/Button';
import './AdminDashboard.css'
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../../hooks/useAuth/useAuth';

const AdminDashboard = () => {
    const {admin, logOut } = useAuth();
    const [control, setControl] = useState("addProduct");
    return (
        <div className="container mt-5">
            <Row sx={1} md={2}>
                <Col md={3}>
                    <div className="sidebar-container">
                    <h4>Dashboard</h4>
                        {
                            admin &&
                            <div>
                            <li className="li-item" onClick={()=>setControl("addProduct")}>Add Product</li>
                            <li className="li-item" onClick={()=>setControl("manageAllProduct")}>Manage Product</li>
                            <li className="li-item" onClick={()=>setControl("manageOrder")}>Manage Order</li>
                            <li className="li-item" onClick={()=>setControl("makeAdmin")}>Make Admin</li>
                            <li className="li-item" onClick={logOut}>Log Out</li>
                        </div>
                        }
                   </div>
                </Col>
                <Col md={9} className="">
                    {control === "addProduct" && <AddProduct></AddProduct>}
                    {control === "manageOrder" && <ManageOrder></ManageOrder>}
                    {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                    {control === "manageAllProduct" && <ManageAllProduct></ManageAllProduct>}
                </Col>
            </Row>
           
        </div>
    );
};

export default AdminDashboard;