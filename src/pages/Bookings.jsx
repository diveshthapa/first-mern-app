import React from 'react'
import "./listing.css"
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import HomeCard from '../component/Home/HomeCard'

const houses = [
    {
        id: 1,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image: image1
    },
    {
        id: 2,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image: image2
    },
    {
        id: 3,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image: image3
    },
    {
        id: 4,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image: image4
    },
]

const Bookings = () => {
  return (
    <div id ='Listing'>
       <div id='listing-search-bar' className='text-center'>
        <h3>My Bookings</h3>
    </div>
    <div id='houses' className='d-flex justify-content-between my-5 flex-wrap'>
                  

                    {houses.map((i) => {
                        return <HomeCard home={i} />
                    })}
                    {houses.map((i) => {
                        return <HomeCard home={i} />
                    })}

                </div>

    </div>
  )
}

export default Bookings