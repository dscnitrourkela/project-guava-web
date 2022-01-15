import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

interface DetailsProps {
  details?: {key: string, value: string}[] | null
}

const ViewCertificate: React.FC<DetailsProps> = ({details}) => {
  const classes = useStyles();

  return (
    <div className={classes.certificateDetails}>
      {details?.map(detail => (
        <Typography
          key={detail.value}
          variant="body1"
          className={classes.detailValue}
        >
          <span className={classes.detailKey}>{detail.key}</span>: {detail.value}
        </Typography>
      ))}
    </div>
  );
};

export default ViewCertificate;

const useStyles = makeStyles(() => ({
  certificateDetails: {
    width: '100%',
    marginBottom: '30px',
  },
  detailValue: {
    fontWeight: 'bold',
    lineHeight: 2,
    margin: '10px auto',
  },
  detailKey: {
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.6);',
    display: 'inline-block',
    width: '150px !important',
  },
  socialsContainer: {},
}));
