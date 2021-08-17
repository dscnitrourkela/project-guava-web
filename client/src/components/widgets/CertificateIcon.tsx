/* eslint-disable no-nested-ternary */
import React from 'react';

// Libraries
import {Paper, makeStyles, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Assets
import {InitialStateType} from '../../store/action-types';

interface CertificateIconProps {
  data: InitialStateType;
  // status: 'pending' | 'approved' | 'distributed';
  status: string;
}

const CertificateIcon: React.FC<CertificateIconProps> = ({data, status}) => {
  const classes = useStyles(status)();

  return (
    <Link to="/approve">
      <Paper className={classes.root}>
        <img
          className={classes.image}
          src={data.certificateImageDetails.src}
          alt={data.certificateDetails.eventName}
        />

        <div className={classes.detailsContainer}>
          <Typography className={classes.name} variant="body1">
            Participation Certificate{data.certificateDetails.eventName}
          </Typography>
          <Typography className={classes.distribution} variant="body1">
            {`Distribution on ${data.certificateDetails.date}, ${data.certificateDetails.time}`}
          </Typography>

          <div className={classes.approveContainer}>
            <div className={classes.profileContainer}>
              {[1, 2, 3].map(number => (
                <img
                  key={number}
                  className={classes.profile}
                  src="https://res.cloudinary.com/dscnitrourkela/image/upload/badges_user/z2kd6ghrzkturciyltns.jpg"
                  alt={data.certificateDetails.eventName}
                />
              ))}
            </div>

            <Typography className={classes.status} variant="body1">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Typography>
          </div>
        </div>
      </Paper>
    </Link>
  );
};

export default CertificateIcon;

// @ts-ignore
const determineColor = (status, theme) => {
  if (status === 'pending') return theme.palette.accent.yellow;
  if (status === 'approved') return theme.palette.accent.green;
  if (status === 'distributed') return theme.palette.primary.main;
  return theme.palette.common.black;
};

const useStyles = (status: string) =>
  makeStyles(theme => ({
    root: {
      width: '300px',
      height: '300px',
      borderRadius: '4px',

      margin: '20px',
      padding: '0px',
      paddingTop: '10px',
      boxShadow: '0px 5px 15px rgba(0,0,0,0.4)',

      backgroundColor: '#ffffff',
      overflow: 'hidden',
      '&:hover': {
        cursor: 'pointer',
      },

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    image: {
      height: '190px',
      width: 'auto',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    detailsContainer: {
      width: '100%',
      margin: 0,
      padding: '10px',
      paddingBottom: 0,
    },
    name: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    distribution: {
      lineHeight: 1,
      marginBottom: '10px',
      color: 'rgba(0,0,0,0.6)',
    },
    approveContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    profileContainer: {
      marginLeft: '15px',
    },
    profile: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      marginLeft: '-15px',
    },
    status: {
      color: determineColor(status, theme),
      fontWeight: 'bold',
    },
  }));
