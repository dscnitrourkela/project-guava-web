/* eslint-disable react/display-name */
import React, {forwardRef} from 'react';

// Libraries
import MaterialTable from 'material-table';
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faCheckCircle,
  faTimes,
  faTrashAlt,
  faInfoCircle,
  faEdit,
  faExternalLinkAlt,
  faFilter,
  faStepBackward,
  faStepForward,
  faChevronLeft,
  faChevronRight,
  faSort,
  faMinusCircle,
  faColumns,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

// State Handlers
import {useCompose} from '../../store/contexts';

function RecipientTable(): JSX.Element {
  const [state] = useCompose();
  const {
    recipientDetails: {columns, rows},
  } = state;

  const classes = useStyles();

  const icon = (faIcon: any) =>
    forwardRef((props, ref) => (
      <FontAwesomeIcon {...props} forwardedRef={ref} size="sm" icon={faIcon} />
    ));
  const icons = {
    Add: icon(faPlusCircle),
    Check: icon(faCheckCircle),
    Clear: icon(faTimes),
    Delete: icon(faTrashAlt),
    DetailPanel: icon(faInfoCircle),
    Edit: icon(faEdit),
    Export: icon(faExternalLinkAlt),
    Filter: icon(faFilter),
    FirstPage: icon(faStepBackward),
    LastPage: icon(faStepForward),
    NextPage: icon(faChevronRight),
    PreviousPage: icon(faChevronLeft),
    ResetSearch: icon(faTimes),
    Search: icon(faSearch),
    SortArrow: icon(faSort),
    ThirdStateCheck: icon(faMinusCircle),
    ViewColumn: icon(faColumns),
  };

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
