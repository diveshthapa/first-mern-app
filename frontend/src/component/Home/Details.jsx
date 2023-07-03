import React, { useEffect, useState } from 'react'
import "./details.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../Constants/const'


const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState("")
    const [loading, setLoading] = useState(true)
    const url = `/api/acc/${id}`

    const getData = async () => {
        const { data } = await axios.get(url, config)
        setDetails(data.data)
        setLoading(false)
        console.log(details)
    }
    useEffect(() => {
        getData()
    }, [])


    return loading ? (
        <div className='d-flex justify-content-center align-items-center' >
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
        </div >
    ) : (
        (
            <>
                <div id="detail-image-container">
                    <img src={details.image} alt="" />
                </div>
                <section id="detailsText" className='mt-5 px-5 d-flex align-items-center justify-content-between '>

                    <div className="left-section">
                        <div className="info-section d-flex">
                            <div className="left-info">
                                <h3>{details.hotel.name}</h3>
                                <h5>{details.name}</h5>
                            </div >
                            <div className="right-info">
                                <h5>Rs.{details.price}/Night</h5>
                            </div>
                        </div >
                        <div className="services-section">

                            {
                                details.wifi ? (<div className="accomodation-service">
                                    <i className="fa-solid fa-wifi"></i>
                                    <p>Free Wifi</p>
                                </div>) : (<></>)
                            }

                            {
                                details.pickup ? (
                                    <div className="accomodation-service">
                                        <i className="fa-solid fa-car"></i>
                                        <p>Free Parking</p>
                                    </div>
                                ) : (<></>)
                            }

                            {
                                details.allServices ? (
                                    <div className="accomodation-service">
                                        <i className="fa-solid fa-shower"></i>
                                        <p>Water Facilities</p>
                                    </div>
                                ) : (<></>)
                            }



                            {
                                details.telephone ? (<div className="accomodation-service">
                                    <i className="fa-solid fa-phone"></i>
                                    <p>24/7 Services</p>
                                </div>) : (<> </>)
                            }

                            {
                                details.cons ? (<div className="accomodation-service">
                                    <i className="fa-solid fa-bell-concierge"></i>
                                    <p>Consilerage Services</p>
                                </div>) : (<> </>)
                            }




                        </div>

                        <div className="para-section">
                            <p>
                                {details.desc}
                            </p>
                        </div>
                    </div >
                    <div className="right-section border border-2 border-warning p-3">
                        <div className="img-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Hyatt_Regency_Danang%2C_Corporate_logo%2C_March_2014.png" alt="Logo" className='img-fluid' />
                        </div>
                        <form >
                            <input type="date" name="checkin" id="checkin" />
                            <input type="date" name="checkout" id="checkout" />
                            <div className="btn-container d-flex justify-content-center">
                                <button className='btn btn-warning btn-md px-4 mb-2' >Book</button>
                            </div>
                        </form>
                    </div>

                </section >
            </>
        )
    )
}


export default Details