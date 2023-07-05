import React, { useEffect, useState } from 'react'
import "./details.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../Constants/const'
import { useSelector } from 'react-redux'
import{toast} from "react-toastify"


const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState("")
    const [loading, setLoading] = useState(true)
    const url = `/api/acc/${id}`

    const { isAuthenticated } = useSelector((state) => state.user)

    const getData = async () => {
        const { data } = await axios.get(url, config)
        setDetails(data.data)
        setLoading(false)
        setValid(data.valid)
    }
    useEffect(() => {
        getData()
    }, [])


    const [checkin, setCheckin] = useState("")
    const [checkout, setCheckout] = useState("")
    const [valid, setValid] = useState(true)

    const handleBook = async (e) => {
        e.preventDefault()
        if (checkin === "" || checkout === "") {
            return toast.warn("Fields Cannot be empty")
        }

        const { data } = await axios.post("/api/book/add",
            { checkin, checkout, accomodation: id }, config)

        if (data.success) {
            getData()
            toast.success("The Accomodation is booked successfully!")
        }
        else {
            toast.error("Booking Failed")
        }
    }


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
                            <img src={details.hotel.logo} alt="Logo" className='img-fluid' />
                        </div>
                        <form >
                            <input type="date" name="checkin" id="checkin" onChange={(e) => setCheckin(e.target.value)} />
                            <input type="date" name="checkout" id="checkout" onChange={(e) => setCheckout(e.target.value)} />
                            <div className="btn-container d-flex justify-content-center">
                                {
                                    isAuthenticated ? (
                                        valid ? (
                                            <button className='btn btn-warning btn-md px-4 mb-2' onClick={handleBook}>Book</button>
                                        ) : (
                                            <button className='btn btn-success btn-md px-4 mb-2' disabled>Booked</button>
                                        )
                                    ) : (
                                        <Link className='btn btn-warning btn-md px-4 mb-2' to="/login">Login</Link>
                                    )
                                }
                            </div>
                        </form>
                    </div>

                </section >
            </>
        )
    )
}


export default Details