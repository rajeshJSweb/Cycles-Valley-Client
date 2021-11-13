import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllProduct.css'

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl]=useState(false)
    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])


    const handleDeleteProduct = id => {
        fetch(`https://enigmatic-hollows-08621.herokuapp.com/deleteProduct${id}`, {
            method: 'DELETE',
            headers:{"Content-type":"application/json"},
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId !== id) {
                    alert('Deleted')
                }
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
    }

    return (
        <div>
            <h2>Manage product</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <tr>
                        <td>{ product?.id}</td>
                        <td>{ product?.productName}</td>
                        <td>{product?.price}</td>
                        <td className="update">Update</td>
                        <td className="bg-warning delete-item" onClick={() => handleDeleteProduct(product?._id)}>Delete X</td>
                    </tr>)        
                }
          
            </tbody>
            </Table>
        </div>
    );
};

export default ManageAllProduct;