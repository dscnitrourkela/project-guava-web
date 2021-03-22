import React, {useState} from 'react';

// Libraries
import {makeStyles, Container} from '@material-ui/core';

// Components
import {CustomTextInput, CustomDateTime} from '../shared';
import DetailsMenu from './DetailsMenu';

// Hooks
import {useInput} from '../../hooks';

function CertificateDetails(): JSX.Element {
  const [title, setTitle] = useInput('');
  const [event, setEvent] = useInput('');
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  const [time, setTime] = useState<Date | null>(new Date(Date.now()));

  const classes = useStyles();
  return (
    <>
      <DetailsMenu />
      <Container className={classes.root}>
        <CustomTextInput
          value={title}
          onChange={setTitle}
          required
          variant="outlined"
          label="Title"
          className={classes.title}
        />

        <CustomTextInput
          value={event}
          onChange={setEvent}
          required
          variant="outlined"
          label="Event Name"
          className={classes.title}
        />

        <CustomDateTime
          selectedDate={date}
          onChange={(e: Date | null): void => setDate(e)}
          type="date"
        />

        <CustomDateTime
          selectedDate={time}
          onChange={(e: Date | null): void => setTime(e)}
          type="time"
        />
      </Container>
    </>
  );
}

export default CertificateDetails;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderBottom: '1px solid rgba(0,0,0,0.23)',
    paddingBottom: '20px',
  },
  title: {
    margin: '10px 0px',
  },
}));
