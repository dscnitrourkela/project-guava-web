import React from 'react';

// Libraries
import {makeStyles, Container, Typography, Radio} from '@material-ui/core';
import {CSVReader} from 'react-papaparse';

// State Handlers
import {useCompose} from '../../store/contexts';
import {COMPOSE} from '../../store/action-types';

// Components
import {CustomCounter} from '../shared';

// Hooks
import {useCounter, useInput} from '../../hooks';

function RecipientsImport(): JSX.Element {
  const [state, dispatch] = useCompose();
  // TODO: Check if counter is needed or not
  // TODO: If required shift to the context state
  const [counter, increment, decrement, setCounter] = useCounter(0);
  // TODO: Shift this state to context and change radio styles
  const [radio, setRadio] = useInput();

  const handleOnDrop = (data: any) => {
    const rows: any = [];
    const columns = [
      {title: 'Name', field: 'name'},
      {title: 'Email', field: 'email'},
      {title: 'Field', field: 'field'},
    ];

    data.forEach((row: any, index: number) => {
      if (index !== 0) {
        const rowX = {};
        row.data.forEach((rowItem: any, indexRow: number) => {
          // @ts-ignore
          rowX[columns[indexRow].field] = rowItem;
        });
        rows.push(rowX);
      }
    });
    dispatch({type: COMPOSE.ADD_RECIPIENTS, payload: {columns, rows}});
  };

  const handleOnError = (err: any) => {
    console.log(err);
  };

  const handleOnRemoveFile = () => {
    dispatch({type: COMPOSE.REMOVE_RECIPIENTS});
  };

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="body1" className={classes.typography}>
        No. of Certificates:{' '}
      </Typography>
      <CustomCounter
        value={counter}
        onChange={setCounter}
        increment={increment}
        decrement={decrement}
      />

      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor="#659cef"
        onRemoveFile={handleOnRemoveFile}
        style={{
          dropArea: {
            borderRadius: 4,
            padding: '0px 0px',
            borderColor: 'rgba(0,0,0,0.23)',
          },
          dropAreaActive: {
            borderColor: 'rgba(0,0,0,0.23)',
          },
          dropFile: {
            width: 'auto',
            minWidth: 100,
            height: 54,
            background: 'transparent',
            borderRadius: 4,
          },
          fileSizeInfo: {
            color: '#398FFE',
            borderRadius: 3,
            lineHeight: 1,
            marginBottom: '0.5em',
            padding: '0 0.4em',
          },
          fileNameInfo: {
            color: '#398FFE',
            backgroundColor: 'transparent',
            borderRadius: 3,
            fontSize: 14,
            lineHeight: 1,
            padding: '0 0.4em',
          },
          removeButton: {
            color: '#398FFE',
          },
          progressBar: {
            backgroundColor: '#398FFE',
          },
        }}
      >
        <span style={{margin: 'auto 5px'}}>
          Drop CSV file here or click to upload.
        </span>
      </CSVReader>

      <div className={classes.radioContainer}>
        <Typography variant="body1" className={classes.typography}>
          Sign Colour:{' '}
        </Typography>

        <Radio
          checked={radio === 'black'}
          onChange={setRadio}
          value="black"
          name="Sign Colour"
          inputProps={{'aria-label': 'sign-colour-black'}}
          size="small"
          style={{color: 'black'}}
          classes={{root: classes.radio}}
        />

        <Radio
          checked={radio === 'white'}
          onChange={setRadio}
          value="white"
          name="Sign Colour"
          inputProps={{'aria-label': 'sign-colour-white'}}
          size="small"
          style={{color: 'white'}}
          classes={{root: classes.radio}}
        />
      </div>
    </Container>
  );
}

export default RecipientsImport;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px auto',
  },
  typography: {
    marginRight: '10px',
  },
  radioContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    padding: '0px',
    margin: '5px',
    marginRight: '10px',
  },
}));
