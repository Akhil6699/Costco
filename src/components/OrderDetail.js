import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useEffect, useState } from "react"

import orders from '../../data/orders.json';
const OrderDetail = ({ order_id}) => {
  const order = orders.find(order=>order.order_id == order_id);
  console.log(order);
  const totalorder = order.products.reduce((acc,item)=>{
   
    return acc + ( item.qty * item.price);
  },0)  ;

  return(<div>
    <h3>Order Details</h3> 
    <table>
    <thead>
      <tr>
        <th ><strong>#</strong> : {order.order_id}</th>
        <th colspan="2"><strong>Date</strong> : {order.order_date}</th>
        <th colspan="2"><strong>Status</strong> : {order.order_status}</th>
      </tr>
      

    </thead>
    <tbody>
      <tr>
        <td><strong>Product Id</strong></td>
        <td><strong>Product Name</strong></td>
        <td style={{textAlign:'right'}}><strong>Qty</strong></td>
        <td style={{textAlign:'right'}}><strong>Price</strong></td>
        <td style={{textAlign:'right'}}><strong>Total</strong></td>
      </tr>
      {order.products.map((product)=>{
        return(<tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td style={{textAlign:'right'}}>{product.qty}</td>
        <td style={{textAlign:'right'}}>${product.price }</td>
        <td style={{textAlign:'right'}}>${product.price * product.qty}</td>
      </tr>);
      })}
      <tr>
     <td colspan='4'><strong>Total</strong></td>
        <td style={{textAlign:'right'}}><strong>${totalorder}</strong></td>
        </tr>
    </tbody>
    </table>
    <h3>User Details</h3>
    <p>User Id : {order.user.id}<br />
     User Name : {order.user.name}<br />
     User address : {order.user.address}</p>

    </div>)

}



export default OrderDetail
