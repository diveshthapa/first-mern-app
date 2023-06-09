import React, { useState } from 'react'
import "./details.css"


const Details = () => {

    return (
        <>
            <div id="detail-image-container">
                <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/8/6/E/%7B86E63048-1365-407B-B241-A66CB8D547F1%7DSLPR_La%20Suite%20Shangri%20La%20Room_2019.jpg" alt="" />
            </div>
            <section id="detailsText" className='mt-5 px-5 d-flex align-items-center justify-content-between '>

                <div className="left-section">
                    <div className="info-section d-flex">
                        <div className="left-info">
                            <h3>Hyatt Regency</h3>
                            <h5>The Royal Suite</h5>
                        </div >
                        <div className="right-info">
                            <h5>Rs.20,000/Night</h5>
                        </div>
                    </div >
                    <div className="services-section">

                        <div className="accomodation-service">
                            <i className="fa-solid fa-wifi"></i>
                            <p>Free Wifi</p>
                        </div>

                        <div className="accomodation-service">
                            <i className="fa-solid fa-car"></i>
                            <p>Free Parking</p>
                        </div>


                        <div className="accomodation-service">
                            <i className="fa-solid fa-shower"></i>
                            <p>Water Facilities</p>
                        </div>
                        <div className="accomodation-service">
                            <i className="fa-solid fa-phone"></i>
                            <p>24/7 Services</p>
                        </div>

                        <div className="accomodation-service">
                            <i className="fa-solid fa-bell-concierge"></i>
                            <p>Consilerage Services</p>
                        </div>


                    </div>

                    <div className="para-section">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A pariatur laboriosam neque quidem quisquam sunt, quam fugiat suscipit rem, rerum, consequatur tenetur dolore quibusdam quaerat dolorum harum ad officiis optio ex nobis alias saepe adipisci commodi similique. Optio ex exercitationem iste quam mollitia odit incidunt sapiente magnam nesciunt, nobis eveniet quod reiciendis dignissimos dolorum perferendis, distinctio cumque repellat? Laborum, nobis vel molestias provident magnam perferendis ea, ullam, doloribus soluta eum neque. Expedita nostrum fuga nihil ut adipisci quo harum quos cupiditate, tempore quasi odio, ratione ea incidunt a quae nam totam, saepe nulla. Nesciunt expedita perferendis alias quam amet molestiae nulla. Rerum veniam blanditiis at, odio numquam eos facilis, quisquam aliquid aut excepturi facere voluptate quae magni. Officiis omnis alias odit? Doloribus cumque tempore saepe aut libero at alias officia perferendis quam cupiditate ipsum, laboriosam unde sit explicabo quo esse magnam? Pariatur maxime exercitationem sunt inventore asperiores aperiam molestias ipsa harum consectetur velit tenetur aut nam repellat laborum amet in nesciunt distinctio fugit, sequi iusto magni corporis! Illo libero voluptates a, minima laboriosam sequi consequatur est consequuntur. Quas hic quos, dicta sequi saepe excepturi delectus nobis harum amet animi consequuntur eveniet aliquid nulla, labore iste autem omnis earum porro recusandae.
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
}

export default Details