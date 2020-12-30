import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import AppLogoHeader from '../components/shared/AppLogoHeader';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = (props) => {
  const { handleLogout, user } = props;
  return (
    <>
      <AppLogoHeader />
      <hr className='m-0' />
      <Container fluid>
        <Row sm xs md={6}>
          <Sidebar handleLogout={handleLogout} user={user} />
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
