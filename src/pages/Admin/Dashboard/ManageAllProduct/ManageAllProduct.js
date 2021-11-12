import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl]=useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])


    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
            headers:{"Content-type":"application/json"},
        })
            .then(res => res.json())
            .then(data => {
                // if (data.insertedId !== id) {
                //     alert('Deleted')
                // }
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
    }

    return (
        <div>
            <h2>This is manage All product</h2>
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
                        <td>Update</td>
                        <td className="bg-warning text-bold" onClick={() => handleDeleteProduct(product?._id)}>Delete X</td>
                    </tr>)        
                }
          
            </tbody>
            </Table>
        </div>
    );
};

export default ManageAllProduct;