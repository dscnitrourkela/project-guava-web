import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

// Context hooks
import {useCompose} from '../../store/contexts';
import {AuthorizerType, COMPOSE} from '../../store/action-types';

// Components
import {CustomButton} from '../shared';
import Authorizer from './Authorizer';

function Authorizers(): JSX.Element {
  const [state, dispatch] = useCompose();

  const addAuthorizer = () => {
    console.log(state.authorizerDetails.length);
    if (state.authorizerDetails.length < 3) {
      dispatch({
        type: COMPOSE.ADD_NEW_AUTHORIZER,
        payload: {id: uuidv4()},
      });
    }
  };

  const removeAuthorizer = (id: string) =>
    dispatch({type: COMPOSE.REMOVE_EXISTING_AUTHORIZER, payload: {id}});

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.introContainer}>
        <div style={{marginRight: '15px'}}>
          <Typography className={classes.introTitle} variant="body1">
            Does this certificate require approval?
          </Typography>
          <Typography className={classes.introBody} variant="body2">
            Click here to add the concerned authority/authorities. They will be
            sent a request to approve the certificate.
          </Typography>
        </div>

        <CustomButton
          label={<FontAwesomeIcon size="sm" icon={faPlus} />}
          className={classes.addAuthorizer}
          onClick={addAuthorizer}
          disabled={state.authorizerDetails.length === 3}
        />
      </div>

      {state.authorizerDetails.length > 0 &&
        state.authorizerDetails.map(
          (authorizer: AuthorizerType): JSX.Element => (
            <Authorizer
              key={authorizer.id}
              item={authorizer}
              removeAuthorizer={removeAuthorizer}
            />
          ),
        )}
    </Container>
  );
}

export default Authorizers;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingBottom: '100px',
  },
  introContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0px',
  },
  introTitle: {
    lineHeight: '1.2rem',
    fontWeight: 500,
    fontSize: '16px',
  },
  introBody: {
    fontSize: '14px',
    lineHeight: '1rem',
    marginTop: '5px',
    color: 'rgba(0,0,0,0.6)',
  },
  addAuthorizer: {
    width: '45px',
    height: '45px',
    minWidth: '45px !important',
  },
}));
