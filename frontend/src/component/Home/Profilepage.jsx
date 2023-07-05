import React, { useEffect, useState } from 'react'
import "./profile.css"
import ProfileTab from '../User/ProfileTab'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { toast} from "react-toastify"
import axios from "axios"
import { config } from "../../Constants/const"
import{loadUser} from"../../Action/userAction"


const ProfilePage = () => {

    const [show, setShow] = useState(false)

    const hideModal = () => setShow(false)
    const showModal = () => setShow(true)

    const { loading, isAuthenticated, user } = useSelector((state) => state.user)

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuthenticated) {
            setFname(user.fname)
            setLname(user.lname)
        }
    }, [isAuthenticated])


    const updateProfile = async () => {
        if (fname === "" || lname === "") {
            return toast.warn("All Fields are required!")
        }

        const { data } = await axios.patch("/api/user", { fname, lname }, config)
        if (data.success) {
            dispatch(loadUser())
            toast.success("User Details Updated")
            hideModal()
        }
        else {
            toast.error("Some Error Occured")
        }
    }




    return isAuthenticated ? (
        <section>
            <div className="profile-container border border-2 border-warning">
                <div className="image-container">
                    <img src={user.profilePic} alt="user" className='img-fluid' />
                    <div className="d-flex justify-content-between">

                        <button className='btn btn-sm btn-outline-success'>Update Picture</button>
                    </div>
                </div>
                <div className="other-container">
                    <div className="name-btn-container d-flex justify-content-between mb-4">
                        <h5 className='text-warning'>{user.fname} {user.lname}</h5>
                        <button className='btn btn-outline-warning btn-sm' onClick={showModal}>Edit Profile</button>
                    </div>

                    <ProfileTab user={user} />
                </div>
            </div>
            <Modal
                show={show}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <form method="post">
                    <Modal.Body>
                        <div className="inp-container">
                            <input type="text" name='fname' id="fname" placeholder='First Name' value={fname} required onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className="inp-container">
                            <input type="text" name='lname' id="lname" placeholder='Last Name' required value={lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateProfile}>Update</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </section>
    ) : (
        <div>Please Login To continue</div>
    )
}

export default ProfilePage




  