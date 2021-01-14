import React from 'react';
import CreateBatch from './CreateBatch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import AppLogoHeader from '../components/shared/AppLogoHeader';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = (props) => {
  const { handleLogout, user } = props;
  return (
    <>
      <Router>
        <AppLogoHeader />
        <hr className='m-0' />
        <Container fluid>
          <Row sm xs md={6}>
            <Sidebar handleLogout={handleLogout} user={user} />
          </Row>
        </Container>

        <Route path='/create-batch' component={CreateBatch} />
      </Router>
    </>
  );
};
export default Dashboard;
