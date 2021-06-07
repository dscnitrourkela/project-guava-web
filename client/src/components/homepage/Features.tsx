import React from 'react';

// Libraries
import {makeStyles, Typography, Container, ButtonBase} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

// Assets
import {HOMEPAGE_CONTENT} from '../../assets/placeholder';

const Features: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="h2" className={classes.sectionTitle}>
          Product Features
        </Typography>
      </Container>

      <Container className={classes.container}>
        {HOMEPAGE_CONTENT.FEATURES.map(({TITLE, DESCRIPTION, ID}) => (
          <div key={ID} className={classes.featureContainer}>
            <Typography variant="h2" className={classes.title}>
              <FontAwesomeIcon
                size="lg"
                icon={faList}
                className={classes.icon}
              />

              {TITLE}
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {DESCRIPTION}
            </Typography>
          </div>
        ))}
      </Container>

      <Container className={classes.messageContainer}>
        <Typography className={classes.message} variant="body1">
          Try it out yourself and experience ease of handling certificates
        </Typography>
        <ButtonBase
          className={classes.button}
          onClick={() => history.push('/dashboard')}
        >
          <Typography variant="body1" style={{fontSize: '16px'}}>
            Get Started
          </Typography>
        </ButtonBase>
      </Container>
    </div>
  );
};

export default Features;

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '70vh',
    height: 'auto',
    backgroundColor: '#f6f6f6',
    padding: '30px 0px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: '3rem',
    lineHeight: '3.5rem',
    width: '100%',
    textAlign: 'left',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  featureContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    height: 'auto',
    minHeight: '280px',
    padding: '30px',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  title: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  icon: {
    marginRight: '20px',
    border: '1px solid #b5b5b5',
    borderRadius: '7px',
    padding: '5px',
    color: '#000000',
  },
  description: {
    color: '#b5b5b5',
    fontSize: '18px',
    lineHeight: '23.75px',
  },
  messageContainer: {
    marginTop: '50px',
  },
  message: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  button: {
    color: '#398FFE',
    border: '1px solid #398FFE',
    borderRadius: '7px',

    padding: '10px 20px',
    marginTop: '20px',
    minWidth: '100px',
    width: 'auto',
    transition: 'background-color 300ms ease',

    '&:hover': {
      backgroundColor: '#398FFE',
      color: '#ffffff',
    },
  },
}));
