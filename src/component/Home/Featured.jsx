import React from 'react'
import HomeCard from './HomeCard'
import './featured.css'
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/4.png"

const houses = [
    {
        id: 1,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image1: image1
    },
    {
        id: 2,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image2: image2
    },
    {
        id: 3,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image3: image3
    },
    {
        id: 4,
        country: "nepal",
        city: 'Kathmandu',
        proce: 20000,
        image4: image4
    },
]

const featured = () => {
    return (
        <div id='featured-section' className='my-5'>
            <div className='container'>
                <h3> Featured Houses</h3>

                <div id='houses' className='d-flex justify-content-between'>
                    {/* <Homecard/ home={Houses[0]}/>
                    <Homecard/ home={Houses[1]}/>
                    <Homecard/ home={Houses[2]}/>
                    <Homecard/ home={Houses[3]}/> */}

                    {houses.map((i) => {
                        return <HomeCard home={i} />
                    })}

                </div>
            </div >
        </div >
    )
}

export default Featured