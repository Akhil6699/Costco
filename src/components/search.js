import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useEffect, useState } from "react"
import axios from 'axios';
import orders from '../../data/orders.json';
const Search = ({ handleSearch }) => {
  const [searchQuery,setSearch] = useState('');
  const searchData = e => {
    //const { search } = this.state
    //const queryResult = search.search(e.target.value)
    setSearch(e.target.value); //{ searchQuery: e.target.value, searchResults: queryResult })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleSearch(searchQuery);
    return false
  }
  return(<div>
    <form onSubmit={handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                Enter your search here
              </label>
              <input
                id="Search"
                value={searchQuery}
                onChange={searchData}
                placeholder="Enter your search here"
                style={{ margin: "0 auto", width: "400px" }}
              />
              <small>Hit enter key to execute search</small>
            </div>
          </form>
    </div>

    )

}



export default Search
