import React, { useState } from 'react'
import "./profile.css"
import ProfileTab from '../User/ProfileTab'
import { Button, Modal } from 'react-bootstrap'

const Profilepage = () => {
    const [show, setshow] = useState(false)
    const hideModal = () => setshow(false)
    const showModal = () => setshow(true)
    return (

        <section>

            <div className="profile-container border border-2 border-warning">
                <div className="image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user" className='img-fluid' />
                    <div className="d-flex justify-content-between">

                        <button className='btn btn-sm btn-outline-success'>Update Picture</button>
                    </div>
                </div>
                <div className="other-container">
                    <div className="name-btn-container d-flex justify-content-between mb-4">
                        <h5 className='text-warning'>Chirag Simkhada</h5>
                        <button className='btn btn-outline-warning btn-sm' onClick={showModal}>Edit Profile</button>
                    </div>
                    <ProfileTab />
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
                            <input type="text" name='fname' id="fname" placeholder='First Name' value="Chirag" required />
                        </div>
                        <div className="inp-container">
                            <input type="text" name='lname' id="lname" placeholder='Last Name' required value="Simkhada" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" >Update</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </section>
    )
}

export default Profilepage