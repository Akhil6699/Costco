import React , {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyOrders from "../components/LazyOrders"
import Search from '../components/search'
const RecentOrders = () => {
	const  [search,setSearch] =useState('')
	const handleSearch=(search)=>{
		setSearch(search);
		//console.log(search,'****');
	}
	return(
  <Layout>
    <SEO title="View Recent Orders" />
    <h1>View Recent Orders</h1>
    <p>Welcome to View Recent Orders</p>
    <Search handleSearch={handleSearch}/>
    <LazyOrders search={search}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}

export default RecentOrders
