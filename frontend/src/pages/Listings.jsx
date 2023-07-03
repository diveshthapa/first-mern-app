import React, { useEffect, useState } from 'react'
import "./listing.css"
import HomeCard from '../components/Home/HomeCard'
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import { config } from '../Constants/const'


const houses = [
    {
        id: 1,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image1
    },
    {
        id: 2,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image2
    },
    {
        id: 3,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image3
    },
    {
        id: 4,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image4
    },
]

const Listings = () => {
    const [properties, setProperties] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProperties()
    }, [])

    const getProperties = async () => {
        const { data } = await axios.get("/api/acc/all", config)
        setProperties(data.data)
        setLoading(false)
    }
    return (
        <div id="listingpage" className='my-5'>
            <div id="listing-search-bar" className='text-center'>
                <input type="text" placeholder='Search any listings' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>


            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center' >
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
                    </div >
                ) : (
                    <div id="houses" className='d-flex justify-content-between container my-5 flex-wrap'>
                        {properties.map((i) => {
                            return <HomeCard home={i} />
                        })}

                    </div>
                )
            }
        </div>
    )
}

export default Listings