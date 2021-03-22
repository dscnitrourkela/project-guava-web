import React from 'react';

// Libraries
import {makeStyles, Container} from '@material-ui/core';

// Context hooks
import {useCompose} from '../../store/contexts';
import {COMPOSE} from '../../store/types';

// Components
import {CustomTextInput, CustomDateTime} from '../shared';
import DetailsMenu from './DetailsMenu';

// Hooks
// import {useInput} from '../../hooks';

function CertificateDetails(): JSX.Element {
  // const [title, setTitle] = useInput('');
  // const [event, setEvent] = useInput('');
  // const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  // const [time, setTime] = useState<Date | null>(new Date(Date.now()));

  const [state, dispatch] = useCompose();

  // @ts-ignore
  const onInputChange = (e, key) =>
    dispatch({
      type: COMPOSE.FORM_UPDATE,
      payload: {key, value: e.target.value},
    });

  // @ts-ignore
  const onDateChange = (e, key) =>
    dispatch({
      type: COMPOSE.FORM_UPDATE,
      payload: {key, value: e},
    });

  const classes = useStyles();
  return (
    <>
      <DetailsMenu />
      <Container className={classes.root}>
        <CustomTextInput
          value={state.certificateDetails.title}
          onChange={e => onInputChange(e, 'title')}
          required
          variant="outlined"
          label="Title"
          className={classes.title}
        />

        <CustomTextInput
          value={state.certificateDetails.eventName}
          onChange={e => onInputChange(e, 'eventName')}
          required
          variant="outlined"
          label="Event Name"
          className={classes.title}
        />

        <CustomDateTime
          selectedDate={state.certificateDetails.date}
          onChange={e => onDateChange(e, 'date')}
          type="date"
        />

        <CustomDateTime
          selectedDate={state.certificateDetails.time}
          onChange={e => onDateChange(e, 'time')}
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
