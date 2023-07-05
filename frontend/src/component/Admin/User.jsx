import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../Constants/const'
import { toast } from 'react-toastify'

const User = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const { data } = await axios.get("/api/user/all", config)
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col" className='text-center'>Email</th>
                        <th scope="col">Type</th>
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
                            </tr>
                        ) : (
                            users.map((i) => {
                                return <tr>
                                    <td>{i.fname}</td>
                                    <td>{i.lname}</td>
                                    <td>{i.username}</td>
                                    <td>{i.email}</td>
                                    <td>{i.type}</td>
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

export default User