import React from 'react';
import Header from './Header';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = (props) => {
  return (
    <div style={{ borderRight: '1px solid gray', width: 'fit-content' }}>
      <Card style={{ borderBottom: '2px solid gray' }}>
        <Accordion.Toggle as={Card.Header}>
          <Header handleLogout={props.handleLogout} header={'Dashboard'} user={props.user} />
        </Accordion.Toggle>
      </Card>
      <Accordion defaultActiveKey='0'>
        <Card style={{ borderBottom: '2px solid gray' }}>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            My Profile
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Link to='#'>View Profile</Link>
              <br />
              <Link to='#'>Edit Profile</Link>
              <br />
              <Link to='#'>Change Password</Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ borderBottom: '2px solid gray' }}>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            Manage Certificates
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <Link to='/create-batch'>Create new Batch</Link>
              <br />
              <Link to='#'>View Templates</Link>
              <br />
              <Link to='#'>Generated Certificate</Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
export default Sidebar;