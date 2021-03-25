import React from 'react';

// Libraries
import {makeStyles, Container, Typography, Radio} from '@material-ui/core';
import {CSVReader} from 'react-papaparse';

// State Handlers
import {useCompose} from '../../store/contexts';
import {COMPOSE} from '../../store/action-types';

// Components
import {CustomCounter, CustomModal} from '../shared';

// Hooks
import {useCounter, useInput} from '../../hooks';

function RecipientsImport(): JSX.Element {
  const [, dispatch] = useCompose();
  // TODO: Check if counter is needed or not
  // TODO: If required shift to the context state
  const [counter, increment, decrement, setCounter] = useCounter(0);
  // TODO: Shift this state to context and change radio styles
  const [radio, setRadio] = useInput();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [resetCsv, setResetCsv] = React.useState(false);

  const handleOnDrop = (data: any) => {
    const rows: any = [];
    const columns = [
      {title: 'Sr. No.', field: 'srNo'},
      {title: 'Name', field: 'name'},
      {title: 'Email', field: 'email'},
      {title: 'Field', field: 'field'},
    ];

    if (data[0].data.length === 2) {
      columns.pop();
    } else if (data[0].data.length > 3) {
      setModalOpen(true);
      return;
    }

    data.forEach((row: any, index: number) => {
      if (index !== 0) {
        const rowX = {};
        row.data.unshift(`${index}`);
        row.data.forEach((rowItem: any, indexRow: number) => {
          // @ts-ignore
          rowX[columns[indexRow].field] = rowItem;
        });
        rows.push(rowX);
      }
    });
    dispatch({type: COMPOSE.ADD_RECIPIENTS, payload: {columns, rows}});
  };

  const handleOnError = () => setModalOpen(true);

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
        accept=".csv"
        addRemoveButton
        removeButtonColor="#659cef"
        isReset={resetCsv}
        onDrop={handleOnDrop}
        onError={handleOnError}
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
      <CustomModal open={modalOpen} setOpen={setModalOpen}>
        <div className={classes.modal}>
          <Typography className={classes.modalTitle} variant="h3">
            CSV Upload Error
          </Typography>
          <Typography className={classes.modalPara} variant="body1">
            The uploaded file has more fields than required. Please follow the
            convention of having at the most 3 fields in the order: name, email,
            field (optional)
          </Typography>
          <Typography
            onClick={() => {
              setModalOpen(false);
              setResetCsv(true);
            }}
            variant="body1"
            className={classes.link}
          >
            Close
          </Typography>
        </div>
      </CustomModal>
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
    color: 'rgba(0,0,0,0.6)',
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
  modal: {
    width: '400px',
    height: '150px',
    backgroundColor: '#ffffff',
    boxShadow:
      '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 24px 48px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
    position: 'relative',
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    width: '100%',
    textAlign: 'left',
    marginTop: '5px',
  },
  modalPara: {
    fontWeight: 'normal',
    width: '100%',
    textAlign: 'left',
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '1.1rem',
  },
  link: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    color: '#398FFE',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
