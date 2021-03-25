import React from 'react';

// Libraries
import {Radio, makeStyles, Typography} from '@material-ui/core';

export interface RadioOptions {
  value: string | number;
  label: string | number;
  color?: string;
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
  horizontal = false,
  className,
}: RadioProps): JSX.Element {
  const classes = useStyles(horizontal);

  return (
    <div className={`${classes.root} ${className}`}>
      {label && (
        <Typography style={{minWidth: '100px'}} variant="body1">
          {label}
        </Typography>
      )}
      {options.map((option: RadioOptions, index) => (
        <div key={option.value} className={classes.optionContainer}>
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
            {!horizontal && (
              <Typography variant="body1">{option.label}</Typography>
            )}
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
    justifyContent: horizontal => (horizontal ? 'center' : 'flex-start'),
    alignItems: horizontal => (horizontal ? 'flex-start' : 'center'),
    flexDirection: horizontal => (horizontal ? 'row' : 'column'),
  },
  optionContainer: {
    width: '100%',
    marginTop: '10px',
    pading: '0px',
  },
  radioContainer: {
    display: 'flex',
    justifyContent: horizontal => (horizontal ? 'center' : 'flex-start'),
    alignItems: horizontal => (horizontal ? 'flex-start' : 'center'),
    padding: '0px',
    margin: '0px',
    width: '90%',
  },
  radio: {
    padding: '0px',
    margin: '5px',
    marginRight: '10px',
    color: 'white',
    border: '1px solid rgba(0,0,0,0.23)',
    backgroundColor: '#ffffff',
  },
}));
