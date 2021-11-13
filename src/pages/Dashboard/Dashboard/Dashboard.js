import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';
import AddProduct from '../../Admin/Dashboard/AddProduct/AddProduct';
import MakeAdmin from '../../Admin/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../../Admin/Dashboard/ManageAllOrder/ManageAllOrder';
import ManageAllProduct from '../../Admin/Dashboard/ManageAllProduct/ManageAllProduct';
import Review from '../../Home/Review/Review';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Pay/Payment';
import './Dashboard.css'

const Dashboard = () => {
    const { admin,logOut } = useAuth({})
    const [control, setControl] = useState("myOrder");
    
    console.log(admin);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const signOut = () => {
        logOut()
          .then(() => {
            history.replace('/');
          }).catch((error) => {
          });
      }


    return (
        <div className="container mt-3">
            <Row sx={2} md={2}>
                <Col md={3} className="sidebar-container">
                    <h5>Dashboard</h5>
                    
                    {admin?.admin && <div>
                        <li className="li-item" onClick={()=>setControl("addProduct")}>Add Product</li>
                        <li className="li-item" onClick={()=>setControl("manageAllProduct")}>Manage All Product</li>
                        <li className="li-item" onClick={()=>setControl("manageAllOrder")}>Manage All Order</li>
                        <li className="li-item" onClick={()=>setControl("makeAdmin")}>Make Admin</li>
                        <li className="li-item" onClick={signOut}>Log Out</li>
                    </div>
                    }
                    {!admin?.admin && <div>
                    <li className="li-item" onClick={()=>setControl("myOrder")}>My Order</li>
                    <li className="li-item" onClick={()=>setControl("payment")}>Pay</li>
                    <li className="li-item" onClick={()=>setControl("myReview")}>Review</li>
                    <li className="li-item" onClick={signOut}>Log Out</li>
                    </div>}
                </Col>
                <Col md={9}>
                    {control === "myOrder"&& <MyOrder></MyOrder>}
                    {control === "payment"&& <Payment></Payment>}
                    {control === "review" && <myReview></myReview>}
                    {control === 'myReview' && <Review></Review>}
                    {control === "addProduct" && <AddProduct></AddProduct>}
                    {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                    {control === "manageAllProduct" && <ManageAllProduct></ManageAllProduct>}
                    {control === "manageAllOrder" && <ManageAllOrder></ManageAllOrder>}
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;