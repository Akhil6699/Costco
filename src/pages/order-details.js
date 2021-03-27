import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderDetail  from "../components/OrderDetail"

const OrderDetailPage = ({location }) => {

const search =location.search;
const id = search.replace('?','').split('=');
	return(
  <Layout>
    <SEO title="View Order Detail" />
    <h1>View Order Detail</h1>
    <p>Welcome to Order Detail Page</p>
    <OrderDetail order_id={id[1]} />
    <Link to="/recent-orders">Go back to the Order</Link><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);
}

export default OrderDetailPage
