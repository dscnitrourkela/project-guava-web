import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

// Context hooks
import {useCompose} from '../../store/contexts';
import {AuthorizerType} from '../../store/action-types';
import {COMPOSE} from '../../store/types';

// Components
import {CustomButton, CustomTextInput} from '../shared';

// Hooks
import {useInput} from '../../hooks';

function Authorizer({
  item,
  removeAuthorizer,
}: {
  item: AuthorizerType;
  removeAuthorizer: (item: string) => void;
}): JSX.Element {
  const [authorizer, setAuthorizer] = useInput();
  const [message, setMessage] = useInput();

  const classes = useStyles();
  return (
    <div className={classes.authorizerContainer}>
      <div className={classes.authorizerRow1}>
        <CustomTextInput
          value={authorizer}
          onChange={setAuthorizer}
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
        onChange={setMessage}
        multiline
        required
        variant="outlined"
        label="Message to the Authorizer"
        className={classes.authorizerInput2}
      />
    </div>
  );
}

function Authorizers(): JSX.Element {
  // const [authorizers, setAuthorizers] = React.useState<string[]>([]);

  const [state, dispatch] = useCompose();

  // const addAuthorizer = () =>
  //   setAuthorizers(current => [...current, `authorizer${Math.random() * 10}`]);

  // const removeAuthorizer = (item: string): void =>
  //   setAuthorizers(current =>
  //     current.filter(authorizer => authorizer !== item),
  //   );

  const addAuthorizer = () =>
    dispatch({
      type: COMPOSE.ADD_NEW_AUTHORIZER,
      payload: {id: Math.random() * 10},
    });

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
          label="+"
          className={classes.addAuthorizer}
          onClick={addAuthorizer}
        />
      </div>
      {state.authorizerDetails.length > 0 &&
        state.authorizerDetails.map(authorizer => (
          <Authorizer
            key={authorizer.id}
            item={authorizer}
            removeAuthorizer={removeAuthorizer}
          />
        ))}
      {/* {authorizers.length > 0 &&
        authorizers
          // .reverse()
          .map(
            (authorizer: string): JSX.Element => (
              <Authorizer
                key={authorizer}
                item={authorizer}
                removeAuthorizer={removeAuthorizer}
              />
            ),
          )} */}
    </Container>
  );
}

export default Authorizers;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  introContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0px',
  },
  introTitle: {
    lineHeight: '1.2rem',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  introBody: {
    fontSize: '14px',
    lineHeight: '1rem',
    marginTop: '5px',
  },
  addAuthorizer: {
    width: '45px',
    height: '45px',
    minWidth: '45px',
  },
  authorizerContainer: {
    padding: 0,
    marginTop: '20px',
    borderBottom: '1px solid rgba(0,0,0,0.23)',
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
