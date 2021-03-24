import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

// Components
import {CustomTextInput} from '../shared';

// Types
import {useCompose} from '../../store/contexts';
import {AuthorizerType, COMPOSE} from '../../store/action-types';

function Authorizer({
  item,
  removeAuthorizer,
}: {
  item: AuthorizerType;
  removeAuthorizer: (item: string) => void;
}): JSX.Element {
  const [state, dispatch] = useCompose();

  const {name: authorizerName, message} = state.authorizerDetails.filter(
    (authorizer: AuthorizerType) => authorizer.id === item.id,
  )[0];

  const classes = useStyles();
  return (
    <div className={classes.authorizerContainer}>
      <div className={classes.authorizerRow1}>
        <CustomTextInput
          value={authorizerName}
          onChange={e =>
            dispatch({
              type: COMPOSE.UPDATE_AUTHORIZER_DETAILS,
              payload: {
                id: item.id,
                key: 'name',
                value: e.target.value,
              },
            })
          }
          select
          required
          variant="outlined"
          label="Authorizer"
          className={classes.authorizerInput1}
          options={[
            {
              label: 'Prof. Abel Mathew',
              value: 'Prof. Abel Mathew',
            },
            {
              label: 'Prof. Harish R.',
              value: 'Prof. Harish R.',
            },
            {
              label: 'Prof. Ritesh Patil',
              value: 'Prof. Ritesh Patil',
            },
          ]}
        />
        <FontAwesomeIcon
          className={classes.deleteAuthorizer}
          size="2x"
          icon={faTrashAlt}
          onClick={() => removeAuthorizer(item.id)}
        />
      </div>

      <CustomTextInput
        value={message}
        onChange={e =>
          dispatch({
            type: COMPOSE.UPDATE_AUTHORIZER_DETAILS,
            payload: {
              id: item.id,
              key: 'message',
              value: e.target.value,
            },
          })
        }
        multiline
        required
        variant="outlined"
        label="Message to the Authorizer"
        className={classes.authorizerInput2}
      />
    </div>
  );
}

export default Authorizer;

const useStyles = makeStyles(theme => ({
  authorizerContainer: {
    padding: 0,
    marginTop: '20px',
    // borderBottom: '1px solid rgba(0,0,0,0.23)',
    width: '100%',
  },
  authorizerInput1: {
    margin: '10px 0px',
    width: '80%',
  },
  authorizerInput2: {
    margin: '10px 0px',
  },
  authorizerRow1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteAuthorizer: {
    width: '15%',
    marginRight: '10px',
    // @ts-ignore
    color: theme.palette.accent.red,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
