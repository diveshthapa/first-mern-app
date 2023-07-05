import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function ProfileTab({user}) {
    return (
        <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="home" title="Details" id="p-details">
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>First Name: </h6>
                    <h6 class="right-text">{user.fname}</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Last Name: </h6>
                    <h6 class="right-text">{user.lname}</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Username: </h6>
                    <h6 class="right-text">{user.username}</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Email: </h6>
                    <h6 class="right-text">{user.email}</h6>
                </div>
            </Tab>

        </Tabs>
    );
}

export default ProfileTab;