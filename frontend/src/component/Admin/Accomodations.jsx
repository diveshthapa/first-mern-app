import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../Constants/const'
import { toast } from 'react-toastify'
import { Button, Modal } from 'react-bootstrap'


const config1 = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
};

const Accomodations = () => {


    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const hideModal = () => {
        setShow(false)
        setShow1(false)
    }
    const showModal = () => setShow(true)


    useEffect(() => {
        getHotels()
        getHtls()
    }, [])

    const [hotels, setHotels] = useState([])
    const [htl, setHtls] = useState([])
    const [loading, setLoading] = useState(true)
    const getHotels = async () => {
        const { data } = await axios.get("/api/acc/all", config)
        console.log(data)
        if (data.success) {
            setHotels(data.data)

        }
        else {
            toast.error("Error Fetching Accomodations")
        }
    }
    const getHtls = async () => {
        const { data } = await axios.get("/api/hotel/all", config)
        if (data.success) {

            setHtls(data.hotels)
            setLoading(false)
        }
        else {
            toast.error("Error Fetching Hotels")
        }
    }


    // name,
    //         desc,
    //         price,
    //         wifi,
    //         pickup,
    //         allServices,
    //         telephone,
    //         hotel

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [wifi, setWifi] = useState(true)
    const [pickup, setPickup] = useState(true)
    const [allServices, setAllservices] = useState(true)
    const [telephone, setTelephone] = useState(true)
    const [cons, setCons] = useState(true)
    const [image, setImage] = useState("")
    const [hotel, setHotel] = useState("")
    const [price, setPrice] = useState("")


    const handleUpdateForm = (dta) => {
        setId(dta._id)
        setName(dta.name)
        setDesc(dta.desc)
        setWifi(dta.wifi)
        setPickup(dta.pickup)
        setAllservices(dta.allServices)
        setTelephone(dta.telephone)
        setImage(dta.image)
        setHotel(dta.hotel._id)
        setPrice(dta.price)
        setShow1(true)
    }


    const handleFileChange = (event) => {
        setImage(event.target.files);
    }


    const handleAdd = async () => {

        if (name == "" || desc == "" || price == "" || hotel == "" || image == "") {
            return toast.warn("All Fields are Required")
        }

        console.log(name, desc, price, wifi, pickup, allServices, telephone, cons, hotel, image)

        const formData = new FormData()
        formData.append("name", name)
        formData.append("desc", desc)
        formData.append("price", price)
        formData.append("wifi", wifi)
        formData.append("pickup", pickup)
        formData.append("allServices", allServices)
        formData.append("telephone", telephone)
        formData.append("cons", cons)
        formData.append("hotel", hotel)
        formData.append("image", image[0])




        const { data } = await axios.post("/api/acc/add", formData, config1)
        if (data.success) {
            toast.success("Accomodation Added Successfully")
        }
        else {
            toast.error("Some Error Occured")
        }

    }

    const handleUpdate = async () => {

        if (name == "" || desc == "" || price == "" || hotel == "" || image == "") {
            return toast.warn("All Fields are Required")
        }



        const formData = new FormData()
        formData.append("id", id)
        formData.append("name", name)
        formData.append("desc", desc)
        formData.append("price", price)
        formData.append("wifi", wifi)
        formData.append("pickup", pickup)
        formData.append("allServices", allServices)
        formData.append("telephone", telephone)
        formData.append("hotel", hotel)
        formData.append("image", image[0])


        const { data } = await axios.patch("/api/acc/", formData, config1)
        console.log(data)
        if (data.success) {
            getHotels();
            hideModal()
            toast.success("Accomodations Updated Successfully")
            //Clear Form
            setName("")
            setDesc("")
            setPrice("")
            setWifi(true)
            setPickup(true)
            setAllservices(true)
            setTelephone(true)
            setCons(true)
            setHotel("")
            setImage("")

        }
        else {
            toast.error("Some Error Occured")
        }

    }


    return (
        <div>
            <div className="d-flex container justify-content-between my-3">

                <h3 className='text-center '><span className='colored-text'>Accomodations</span> of MiCasa</h3>
                <button onClick={showModal} className='btn btn-md btn-success'>Add Accomodations</button>
            </div>
            <table class="table table-dark table-striped ">
                <thead>
                    <tr>

                        <th scope="col" className='px-3'>Name</th>
                        <th scope="col">Hotel</th>
                        <th scope="col">Price</th>
                        <th scope="col" className='text-center' >Wifi</th>
                        <th scope="col" className='text-center' >Pickup</th>
                        <th scope="col" className='text-center' >24/7 Availability</th>
                        <th scope="col" className='text-center' >Consilerage</th>
                        <th scope="col" className='text-center' >Telephone</th>
                        <th scope="col" className='text-center'>Image</th>
                        <th scope="col" className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    ) : (
                        hotels.map((i) => {
                            i.image.replaceAll("\\\\", "\\")
                            i.image.slice(0, 7) == "backend" ? i.image = "http://localhost:5000/" + i.image : i.image = i.image
                            return (
                                <tr>
                                    <td className='px-3'>{i.name}</td>
                                    <td>{i.hotel.name}</td>
                                    <td >{i.price}</td>
                                    <td className='text-center'>{i.wifi ? "Yes" : "No"}</td>
                                    <td className='text-center'>{i.pickup ? "Yes" : "No"}</td>
                                    <td className='text-center'>{i.allServices ? "Yes" : "No"}</td>
                                    <td className='text-center'>{i.telephone ? "Yes" : "No"}</td>
                                    <td className='text-center'>{i.cons ? "Yes" : "No"}</td>
                                    <td className='text-center'><img src={i.image} alt="" style={{ width: "4rem" }} /></td>
                                    <td className='text-center'>
                                        <button className='btn btn-success btn-sm mx-3' onClick={() => handleUpdateForm(i)}>Update</button>
                                        <button className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}

                </tbody>
            </table>





            <Modal
                show={show}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Hotel</Modal.Title>
                </Modal.Header>
                <form method="post" enctype='multipart/form-data'>
                    <Modal.Body>
                        <div className="inp-container">
                            <input type="text" name='Name' id="Name" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <textarea type="text" name='desc' id="desc" placeholder='Description' value={desc} required onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type='number' name='price' id="price" placeholder='Price' value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <label for="wifi" className='lim-wid' style={{ width: "50%" }}>Wifi</label>
                            <input type="checkbox" name='wifi' id="wifi" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="pickup">Pickup</label>
                            <input type="checkbox" name='pickup' id="pickup" checked={pickup} onChange={(e) => setPickup(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="allServices">24/7 Availability</label>
                            <input type="checkbox" name='allServices' id="allServices" checked={allServices} onChange={(e) => setAllservices(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="telephone">Telephone</label>
                            <input type="checkbox" name='telephone' id="telephone" checked={telephone} onChange={(e) => setTelephone(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="cons">Consilerage</label>
                            <input type="checkbox" name='cons' id="cons" checked={cons} onChange={(e) => setCons(e.target.checked)} />
                        </div>


                        <div className="inp-container">
                            <label style={{ width: "50%" }} for="hotel">Hotel</label>
                            <select name="hotel" id="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)}>
                                <option value="" disabled selected>Select Hotel</option>
                                {!loading && htl.map((i) => {
                                    return (
                                        <option value={i._id}>{i.name}</option>
                                    )
                                })}
                            </select>
                        </div>



                        <div className="inp-container">
                            <input type="file" name='logo' id="logo" required onChange={handleFileChange} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>Add</Button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Modal For Update Form */}

            <Modal
                show={show1}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Accomodation</Modal.Title>
                </Modal.Header>
                <form method="post" enctype='multipart/form-data'>
                    <Modal.Body>
                        <div className="inp-container">
                            <input type="text" name='Name' id="Name" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <textarea type="text" name='desc' id="desc" placeholder='Description' value={desc} required onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type='number' name='price' id="price" placeholder='Price' value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <label for="wifi" className='lim-wid' style={{ width: "50%" }}>Wifi</label>
                            <input type="checkbox" name='wifi' id="wifi" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="pickup">Pickup</label>
                            <input type="checkbox" name='pickup' id="pickup" checked={pickup} onChange={(e) => setPickup(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="allServices">24/7 Availability</label>
                            <input type="checkbox" name='allServices' id="allServices" checked={allServices} onChange={(e) => setAllservices(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="telephone">Telephone</label>
                            <input type="checkbox" name='telephone' id="telephone" checked={telephone} onChange={(e) => setTelephone(e.target.checked)} />
                        </div>
                        <div className="inp-container">
                            <label style={{ width: "50%" }} className='lim-wid' for="cons">Consilerage</label>
                            <input type="checkbox" name='cons' id="cons" checked={cons} onChange={(e) => setCons(e.target.checked)} />
                        </div>


                        <div className="inp-container">
                            <input type="file" name='logo' id="logo" required onChange={handleFileChange} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>Update</Button>
                    </Modal.Footer>
                </form>
            </Modal>



        </div>









    )
}

export default Accomodations