/* eslint-disable react/display-name */
import React from 'react';

// Libraries
import MaterialTable from 'material-table';
import {makeStyles, Typography} from '@material-ui/core';

// State Handlers
import {useCompose} from '../../store/contexts';

// Utils
import {materialTableIcons as icons} from '../../utils';

function RecipientTable(): JSX.Element {
  const [state] = useCompose();
  const {
    recipientDetails: {columns, rows},
  } = state;

  const classes = useStyles();

  return (
    <>
      {columns.length > 0 && rows.length > 0 ? (
        <MaterialTable
          title="Recipients List"
          columns={columns}
          data={rows}
          // @ts-ignore
          icons={icons}
          style={{
            width: '100%',
            boxShadow: 'none',
            border: '1px solid rgba(0,0,0,0.23)',
            padding: '15px 10px',
            borderRadius: 6,
          }}
          options={{
            searchFieldVariant: 'outlined',
            pageSize: 10,
            headerStyle: {
              fontSize: '18px',
            },
            rowStyle: {
              fontSize: '16px',
              color: 'rgba(0,0,0,0.6)',
            },
          }}
        />
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
