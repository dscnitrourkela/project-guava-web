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
          Ultricies nibh praesent vitae convallis auctor. A quisque in arcu
          elementum suspendisse egestas ut mauris. In et vitae, arcu, egestas
          consectetur neque, eget. Vitae massa in at velit et ac, purus enim.
          Sollicitudin non donec lectus felis sodales et tortor quis cursus.
          Proin nam adipiscing est leo dictum elementum duis ultrices sit. Sit
          ullamcorper{' '}
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
