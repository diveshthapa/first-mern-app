import React, { useEffect, useState } from 'react'
import HomeCard from './HomeCard'
import './featured.css'
import axios from 'axios'
import { config } from '../../Constants/const'



const Featured = () => {
    const [feat, setFeat] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadFeatured()
    }, [])

    const loadFeatured = async () => {
        const { date } = await axios.get("/api/acc/all", config)
        setFeat(data.data.slice())
        setLoading(false)
    }


    return (
        <div id='featured-section' className='my-5'>
            <div className='container'>
                <h3> Featured Houses</h3>

                {
                    loading ? (
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://uxplanet.org/using-loading-animation-on-websites-and-apps-examples-and-snippets-to-use-cab0097be9f1">
                            </img>
                            <>Loading</>

                            ) : (
                            <div id='houses' className='d-flex justify-content-between'>
                                {feat.map((i) => {
                                    return <HomeCard home={i} />
                                })}


                            </div>
))
                        </div>
        </div>
    )
}
            export default Featured