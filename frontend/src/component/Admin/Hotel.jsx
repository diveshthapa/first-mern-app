import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../Constants/const'
import { toast } from 'react-toastify'

const Hotels = () => {
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


    const updateHotel = async (id) => {
        const { data } = await axios.patch("/api/user/update", { id }, config)
        if (data.success) {
            getHotels()
            toast.success("User Updated Successfully")
        }
    }
    return (
        <div>
            <h3 className='text-center my-3'><span className='colored-text'>Users</span> of MiCasa</h3>
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
                            return (
                                <tr>
                                    <td className='px-3'>{i.name}</td>
                                    <td>{i.country}</td>
                                    <td >{i.city}</td>
                                    <td><img src={i.logo} alt="" style={{ width: "4rem" }} /></td>
                                    <td className='text-center'>
                                        <button className='btn btn-success btn-sm mx-3' onClick={() => updateHotel(i._id)}>Update</button>
                                        <button className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Hotels