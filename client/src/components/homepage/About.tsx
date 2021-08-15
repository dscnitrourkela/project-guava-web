import React from 'react';

// Libraries
import {makeStyles, Typography, Container} from '@material-ui/core';

// Assets
import img1 from '../../assets/imgs/about/img1.png';
import img2 from '../../assets/imgs/about/img2.png';

const Features: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Typography variant="h2" className={classes.sectionTitle}>
        About Us
      </Typography>

      <div className={classes.container}>
        <img className={classes.img} src={img1} alt="DSC NIT Rourkela" />
        <img className={classes.img} src={img2} alt="NIT Rourkela" />
        <Typography variant="body1" className={classes.aboutUs}>
          Developer Student Club (DSC) is a Google Developers program for
          university students to learn mobile and web development skills. The
          club will be open to any student, ranging from novice developers who
          are just starting, to advanced developers who want to further their
          skills. The club is intended as a space for students to try out new
          ideas and collaborate to solve mobile and web development problems.
        </Typography>
      </div>
    </Container>
  );
};

export default Features;

const useStyles = makeStyles(() => ({
  wrapper: {
    minHeight: '70vh',
    height: 'auto',

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
    paddingBottom: '50px',
  },
  img: {
    width: '100%',
    height: 'auto',
    borderRadius: '7px',
  },
  aboutUs: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: '#b5b5b5',
  },
}));
