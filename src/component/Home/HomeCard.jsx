import React from "react"

const HomeCard = ({ home }) => {
    return (
        <div className='homeCard my-4'>
            <div className='house-image-container'>
                <img src='{home.image}' alt='' />
            </div>
            <div className='house-text-container'>
                <h4>{home.city},{home.country}</h4>
                <p>Rs. {home.price}/Night</p>
            </div>
            <div>
                <div className='house-btn-container text-center'>
                    <button className='btn btn-warning'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard