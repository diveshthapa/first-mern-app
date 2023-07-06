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

const Hotels = () => {


    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const hideModal = () => {
        setShow(false)
        setShow1(false)
    }
    const showModal = () => setShow(true)


    useEffect(() => {
        getHotels()
    }, [])

    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const getHotels = async () => {
        const { data } = await axios.get("/api/hotel/all", config)
        if (data.success) {
            console.log(data)
            setHotels(data.hotels)
            setLoading(false)
        }
        else {
            toast.error("Error Fetching Hotels")
        }
    }



    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [logo, setLogo] = useState("")


    const handleUpdateForm = (dta) => {
        setId(dta._id)
        setName(dta.name)
        setCountry(dta.country)
        setCity(dta.city)
        setLogo(dta.logo)
        console.log(dta)
        setShow1(true)
    }


    const handleFileChange = (event) => {
        setLogo(event.target.files);
        console.log(logo)
    }


    const handleAdd = async () => {

        if (name == "" || country == "" || city == "" || logo == "") {
            return toast.warn("All Fields are Required")
        }

        const formData = new FormData()
        formData.append("name", name)
        formData.append("country", country)
        formData.append("city", city)
        formData.append("logo", logo[0])


        const { data } = await axios.post("/api/hotel/add", formData, config1)
        if (data.success) {
            toast.success("Hotel Added Successfully")
        }
        else {
            toast.error("Some Error Occured")
        }

    }

    const handleUpdate = async () => {

        if (name == "" || country == "" || city == "" || logo == "") {
            return toast.warn("All Fields are Required")
        }


        const formData = new FormData()
        formData.append("name", name)
        formData.append("country", country)
        formData.append("city", city)
        formData.append("id", id)
        formData.append("logo", logo[0])
        console.log(formData)

        const { data } = await axios.patch("/api/hotel/", formData, config1)
        if (data.success) {
            getHotels();
            hideModal()
            toast.success("Hotel Updated Successfully")
        }
        else {
            toast.error("Some Error Occured")
        }

    }


    return (
        <div>
            <div className="d-flex container justify-content-between my-3">

                <h3 className='text-center '><span className='colored-text'>Hotels</span> of MiCasa</h3>
                <button onClick={showModal} className='btn btn-md btn-success'>Add Hotel</button>
            </div>
            <table class="table table-dark table-striped ">
                <thead>
                    <tr>

                        <th scope="col" className='px-3'>Name</th>
                        <th scope="col">Country</th>
                        <th scope="col" >City</th>
                        <th scope="col">Logo</th>
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
                        </tr>
                    ) : (
                        hotels.map((i) => {
                            i.logo.replaceAll("\\\\", "\\")
                            i.logo.slice(0, 7) == "backend" ? i.logo = "http://localhost:5000/" + i.logo : i.logo = i.logo
                            return (
                                <tr>
                                    <td className='px-3'>{i.name}</td>
                                    <td>{i.country}</td>
                                    <td >{i.city}</td>
                                    <td><img src={i.logo} alt="" style={{ width: "4rem" }} /></td>
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
                            <input type="text" name='country' id="country" placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type="text" name='city' id="city" placeholder='City' required value={city} onChange={(e) => setCity(e.target.value)} />
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
            <Modal
                show={show1}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Hotel</Modal.Title>
                </Modal.Header>
                <form method="post" enctype='multipart/form-data'>
                    <Modal.Body>
                        <div className="inp-container">
                            <input type="text" name='Name' id="Name" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type="text" name='country' id="country" placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type="text" name='city' id="city" placeholder='City' required value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="inp-container">

                            <label for="logo">Add Logo
                            </label>
                            <input type="file" name='logo' id="logo" required onChange={handleFileChange} className="d-none" />

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

export default Hotels