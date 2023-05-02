import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {remove}  from "../Store/cartSlice";

const Cart = () => {
  const products = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  const handelRemove=(productID)=>{
    dispatch(remove(productID))

  };
  return (
    <div>
    <h3>Cart</h3>
    <div className='cartwrapper' >
    {
      products.map((product)=>(
        <div className='cartCard' >
          <img src={product.image} alt='' />
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>

          <button className='btn' onClick={()=>handelRemove(product.id)} >Remove</button>
        </div>
      ))

    }

    </div>
    
    </div>
  )
}

export default Cart