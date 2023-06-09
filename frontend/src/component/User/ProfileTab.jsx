import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function ProfileTab() {
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
                    <h6 class="right-text">Chirag</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Last Name: </h6>
                    <h6 class="right-text">Simkhada</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Username: </h6>
                    <h6 class="right-text">Chirag</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Email: </h6>
                    <h6 class="right-text">chiragsimkhada@gmail.com</h6>
                </div>
            </Tab>

        </Tabs>
    );
}

export default ProfileTab;