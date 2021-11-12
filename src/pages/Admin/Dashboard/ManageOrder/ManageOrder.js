import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://enigmatic-hollows-08621.herokuapp.com/manageOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    
    const handleDeleteOrder = id => {
        fetch(`https://enigmatic-hollows-08621.herokuapp.com/${id}`, {
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
            <h1>This is manage order page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => <tr>
                        <td>{order?.id}</td>
                        <td>{order?.productName}</td>
                        <td>{order?.price}</td>
                        <td>Update</td>
                        <td className="bg-warning text-bold" onClick={() => handleDeleteOrder(order?._id)}>Delete X</td>
                    </tr>)        
                }
          
            </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;