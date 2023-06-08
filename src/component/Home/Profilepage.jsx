import React from 'react'
import React from 'react'
import "./profile.css"

const Profilepage = () => {
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
                        <button className='btn btn-outline-warning btn-sm' >Edit Profile</button>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Profilepage