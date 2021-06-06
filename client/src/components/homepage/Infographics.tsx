import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

// Assets
import PartOne from '../../assets/imgs/infographics/PartOne';
import PartTwo from '../../assets/imgs/infographics/PartTwo';
import PartThree from '../../assets/imgs/infographics/PartThree';
import PartFour from '../../assets/imgs/infographics/PartFour';

const Infographics: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.infographicsContainer}>
      <div className={classes.partOne}>
        <PartOne />
      </div>

      <div className={classes.partTwo}>
        <PartTwo />
      </div>

      <div className={classes.partThree}>
        <PartThree />
      </div>

      <div className={classes.partFour}>
        <PartFour />
      </div>
    </div>
  );
};

export default Infographics;

const useStyles = makeStyles(() => ({
  infographicsContainer: {
    width: '60vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 0.5fr',
    gridTemplateRows: '2fr 1fr 1fr 1fr 0.5fr',
    gap: 0,
  },
  partOne: {
    gridColumn: '2/6',
    gridRow: '1/5',
  },
  partTwo: {
    gridColumn: '1/3',
    gridRow: '3/6',
  },
  partThree: {
    gridColumn: '4/6',
    gridRow: '4/6',
  },
  partFour: {
    gridColumn: '5/7',
    gridRow: '2/3',
  },
}));
