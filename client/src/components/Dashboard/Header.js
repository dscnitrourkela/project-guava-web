import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = (props) => {
  const { handleLogout, user } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{props.header}</h3>
      {/* <h5>{user.email}</h5> */}

      <Button className='align-item-end' variant='danger' onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Content;
