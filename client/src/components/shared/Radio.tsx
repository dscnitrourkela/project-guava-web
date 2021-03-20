import React from 'react';

// Libraries
import {Radio, makeStyles, Typography} from '@material-ui/core';

export interface RadioOptions {
  value: string | number;
  label: string | number;
}

export interface RadioProps {
  value: string | number | undefined;
  onChange: (event: React.BaseSyntheticEvent) => void;
  options: RadioOptions[];
  name: string;
  ariaLabel?: string;
  label?: string;
  selectedChildElement?: JSX.Element[] | React.FC[];
  horizontal?: boolean;
  className?: string;
  [x: string]: any;
}

function CustomRadio({
  value,
  onChange,
  options,
  label,
  name,
  ariaLabel,
  selectedChildElement,
  horizontal,
  className,
}: RadioProps): JSX.Element {
  const classes = useStyles(horizontal);

  return (
    <div className={`${classes.root} ${className}`}>
      {options.map((option: RadioOptions, index) => (
        <div key={option.value} className={classes.optionContainer}>
          {label && <Typography variant="h3">{label}</Typography>}
          <div className={classes.radioContainer}>
            <Radio
              checked={value === option.value}
              onChange={onChange}
              value={option.value}
              name={name}
              inputProps={{'aria-label': `${ariaLabel}-${index}`}}
              size="small"
              classes={{
                root: classes.radio,
              }}
            />
            <Typography variant="body1">{option.label}</Typography>
          </div>
          {selectedChildElement &&
            value === option.value &&
            selectedChildElement[index]}
        </div>
      ))}
    </div>
  );
}

export default CustomRadio;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  optionContainer: {
    width: '100%',
    marginTop: '10px',
    pading: '0px',
  },
  radioContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px',
    margin: '0px',
    width: '90%',
  },
  radio: {
    padding: '0px',
    margin: '5px',
    marginRight: '10px',
  },
}));
