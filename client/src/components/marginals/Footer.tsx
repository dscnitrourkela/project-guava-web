import React from 'react';

// Libraries
import {Container, makeStyles, Typography, ButtonBase} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link as NavLink} from 'react-scroll';

// Assets
import LOGOS from '../../assets/imgs/logos';
import {HOMEPAGE_CONTENT} from '../../assets/placeholder';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Container className={classes.footerContainer}>
        <div className={classes.logoContainer}>
          <img src={LOGOS.ONE} alt="Signit Logo" className={classes.img} />
          <img src={LOGOS.DSC} alt="Signit Logo" className={classes.img} />
        </div>

        <div className={classes.sectionsContainer1}>
          <Typography variant="h3" className={classes.title}>
            Sections
          </Typography>

          <ul className={classes.ulContainer}>
            <li>
              <NavLink to={HOMEPAGE_CONTENT.NAV.LANDING} smooth>
                <Typography className={classes.liItem} variant="body1">
                  Home
                </Typography>
              </NavLink>
            </li>
            <li>
              <NavLink to={HOMEPAGE_CONTENT.NAV.FEATURES} smooth>
                <Typography className={classes.liItem} variant="body1">
                  Product Features
                </Typography>
              </NavLink>
            </li>
            <li>
              <NavLink to={HOMEPAGE_CONTENT.NAV.ABOUT} smooth>
                <Typography className={classes.liItem} variant="body1">
                  About Us
                </Typography>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.sectionsContainer2}>
          <Typography variant="h3" className={classes.title}>
            Contact Us
          </Typography>

          <ul className={classes.ulContainer}>
            <li>
              <a
                href="mailto:dsc.nitr@gmail.com"
                style={{textDecoration: 'none'}}
              >
                <Typography className={classes.liItem} variant="body1">
                  dsc.nitr@gmail.com
                </Typography>
              </a>
            </li>
            <li className={classes.iconsContainer}>
              {HOMEPAGE_CONTENT.SOCIALS.map(({NAME, LINK, ICON}) => (
                <a
                  href={LINK}
                  key={NAME}
                  className={classes.icon}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon size="2x" icon={ICON} />
                </a>
              ))}
            </li>
          </ul>
        </div>

        <div className={classes.messageContainer}>
          <Typography variant="h2" className={classes.message}>
            Certificate management is not a tough job. You just need to do it
            with Signit
          </Typography>

          <ButtonBase className={classes.button}>
            <Typography variant="body1" style={{fontSize: '16px'}}>
              Get Started
            </Typography>
          </ButtonBase>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;

const useStyles = makeStyles(theme => ({
  footerContainer: {
    height: 'auto',
    minHeight: '300px',
    border: '1px solid #b5b5b5',
    borderRadius: '10px',
    marginBottom: '30px',
    padding: '40px',

    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
    gap: '20px',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gridColumnStart: 'span 1',

    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
      gridColumnStart: 'span 2',
    },
  },
  img: {
    width: '70%',
    height: 'auto',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '60%',
      marginBottom: '30px',
    },
  },
  sectionsContainer1: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gridColumnStart: 'span 1',
  },
  sectionsContainer2: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gridColumnStart: 'span 1',
  },
  title: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: '24px',
    lineHeight: '28px',
    color: '#000000',
    marginBottom: '20px',
  },
  ulContainer: {},
  liItem: {
    width: '100%',
    textAlign: 'left',
    color: '#b5b5b5',
    fontSize: '18px',
    lineHeight: '23px',
    marginBottom: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  icon: {
    marginRight: '20px',
    color: '#b5b5b5',
  },
  messageContainer: {
    gridColumnStart: 'span 1',
    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumnStart: 'span 2',
    },
  },
  message: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '10px',
  },
  button: {
    color: '#398FFE',
    border: '1px solid #398FFE',
    borderRadius: '7px',

    padding: '10px 20px',
    marginTop: '40px',
    minWidth: '100px',
    width: 'auto',
    transition: 'background-color 300ms ease',

    '&:hover': {
      backgroundColor: '#398FFE',
      color: '#ffffff',
    },
  },
}));
