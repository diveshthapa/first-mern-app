import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ home }) => {
    return (
        <div className="homeCard" style={{ marginBottom: "8rem" }}>
            <div className="house-image-container">
                <img src={home.image} alt="" />
            </div>
            <div className="house-text-container">
                <h4>{home.name}</h4>
                <p>Rs. {home.price}/Night</p>
            </div>
            <div className="house-btn-container text-center">
                <Link to={`/acc/${home._id}`} className='btn btn-warning'>Learn More</Link>
            </div>
        </div>
    )
}

export default HomeCard