import React, { useEffect, useState } from 'react'
import HomeCard from './HomeCard'
import "./featured.css"
import axios from "axios"
import { config } from '../../Constants/const'



const Featured = () => {
    const [feat, setFeat] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadFeatured()
    }, [])

    const loadFeatured = async () => {
        const { data } = await axios.get("/api/acc/all", config)
        setFeat(data.data.slice(4))
        setLoading(false)
    }


    return (
        <div id="featured-section" className='my-5'>
            <div className="container">
                <h3>Featured Houses</h3>

                {
                    loading ? (
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
                        </div>
                    ) : (
                        <div id="houses" className='d-flex justify-content-between mb-3'>
                            {feat.map((i) => {
                                return <HomeCard home={i} />
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Featured