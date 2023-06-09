import React from 'react'
import "./listing.css"

const Listing = () => {
  return (
    <div id ='Listing'>
       <div id='listing-search-bar' className='text-center'>
        <input type='text' placeholder='Search any Listings'/>
        <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    </div>
  )
}

export default Listing