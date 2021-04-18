/* eslint-disable react/display-name */
import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

// Components
import {MaterialTable} from '../widgets';

// State Handlers
import {useCompose} from '../../store/contexts';

function RecipientTable(): JSX.Element {
  const [state] = useCompose();
  const {
    recipientDetails: {columns, rows},
  } = state;

  const classes = useStyles();

  return (
    <>
      {columns.length > 0 && rows.length > 0 ? (
        <MaterialTable columns={columns} rows={rows} />
      ) : (
        <div className={classes.root}>
          <Typography variant="body1" className={classes.typography}>
            Upload CSV file to see a list of recipients
          </Typography>
        </div>
      )}
    </>
  );
}

export default RecipientTable;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  typography: {
    color: 'rgba(0,0,0,0.23)',
  },
  sort: {
    marginLeft: '10px',
  },
}));
