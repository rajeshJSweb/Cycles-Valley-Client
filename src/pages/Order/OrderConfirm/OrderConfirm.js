import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './OrderConfirm.css'

const OrderConfirm = () => {
    const { user } = useAuth();
    const { _id } = useParams()
    const [orders, setOrders] = useState({});

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        axios.post('https://enigmatic-hollows-08621.herokuapp.com/confirmOrder', data)
      .then(res => {
        if (res.data.insertedId) {
            history.push(redirect_uri);
            alert('Order Completed')
            history.replace('/')
          }
          console.log(data);
    }) 
    };

    useEffect(() => {
        fetch(`https://enigmatic-hollows-08621.herokuapp.com/singleOrder/${_id}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[])
    return (
        <div className="mb-5">
            <div>
            <div>
                    <h3>Complete your order</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
                <fieldset disabled>
                    <input className="input-item" {...register("email")} defaultValue={user.email}/>
                </fieldset>
                <input className="input-item" defaultValue={user.displayName} type="text" {...register("name")} /> <br />
                <input className="input-item" type="text" defaultValue={orders.productName} {...register("productName")} /><br />
                <input className="input-item" type="text" defaultValue={orders.img} placeholder="Image"  {...register("img")} /><br />
                <input className="input-item" type="text" placeholder="City"  {...register("city")} /><br />
                <input className="input-item" type="text" placeholder="Country"  {...register("country")} /><br />
                        
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-danger" type="submit" value="Place Order" />
            </form>
            </div>
            </div>
        </div>
    );
};

export default OrderConfirm;