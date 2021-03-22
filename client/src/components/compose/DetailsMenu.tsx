import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

function DetailsMenu(): JSX.Element {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="body1" className={classes.backText}>
        <FontAwesomeIcon
          className={classes.back}
          size="lg"
          icon={faChevronLeft}
          // onClick={() => setUploadImage('')}
        />
        Back
      </Typography>

      <Typography variant="body1" className={classes.discardText}>
        Discard
        <FontAwesomeIcon
          className={classes.discard}
          size="lg"
          icon={faTrashAlt}
          // onClick={() => setUploadImage('')}
        />
      </Typography>
    </Container>
  );
}

export default DetailsMenu;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    borderBottom: 'rgba(0,0,0,0.23)',
  },
  backText: {
    color: theme.palette.primary.main,
    height: 'auto',
    margin: '20px 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  back: {
    color: theme.palette.primary.main,
    marginRight: '10px',
  },
  discardText: {
    // @ts-ignore
    color: theme.palette.accent.red,
    height: 'auto',
    margin: '20px 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  discard: {
    marginLeft: '10px',
  },
}));
