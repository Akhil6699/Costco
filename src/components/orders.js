import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useEffect, useState } from "react"
import axios from 'axios';
import orders from '../../data/orders.json';
const Orders = ({search }) => {

  const renderOrder=(order)=>(<tr><td>{order.order_id}</td>
        <td>{order.products.length}</td>
        <td>{order.order_date}</td>
        <td>{order.order_status}</td>
        <td>{order.user.name}</td> 
        <td><Link to={`/order-details/?id=${order.order_id}`}>Details</Link></td>
        </tr>);
  
  return(<div>

    List of Orders:
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Total Products</th>
          <th>Order Date</th>
          <th>Order Status</th>
          <th>User Name</th>
          <th> - </th>
        </tr>
      </thead>
      <tbody>

      {orders.map((order)=>{
        const output = renderOrder(order)
        if (search){
          if(order.user.name.indexOf(search)!==-1 || search == order.order_status){
            return output
          } 
        } else {
          return output   
        }
        
      })}
      </tbody>
    </table>
    </div>

    )

}



export default Orders
