import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../Constants/const'
import { toast } from 'react-toastify'

const Booking = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const { data } = await axios.get("/api/book/all", config)
        if (!data.success) {
            toast.error("Some Error Occured")
        }
        setUsers(data.users)
        setLoading(false)
    }

    const updateUser = async (id) => {
        const { data } = await axios.patch("api/user/upgrade", { id }, config)
        if (data.success) {
            getUsers()
            toast.success("User Updated Successfully")
        }
        else
            toast.success("Some Error Occured")
    }
    return (
        <div>
            <h4 className='text-center my-4'>Users of <span className='colored-text'>MiCasa</span></h4>

            <table className="table table-dark  table-striped">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Room</th>
                        <th scope="col">Checkin</th>
                        <th scope="col">Checkout</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ) : (
                            users.map((i) => {
                                return <tr>
                                    <td>{i.user.username}</td>
                                    <td>{i.accomodation.name}</td>
                                    <td>{i.checkin}</td>
                                    <td>{i.checkout}</td>
                                    <td>{i.status}</td>
                                    <td>
                                        <button className='btn btn-success btn-sm mx-2' onClick={() => updateUser(i._id)}>Update</button>
                                        <button className='btn btn-danger btn-sm'>Delete</button>
                                    </td>

                                </tr>
                            })
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Booking