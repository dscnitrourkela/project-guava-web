import React from 'react';

import {
  makeStyles,
  createStyles,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  children: React.ReactElement;
}

function CustomModal({
  open,
  setOpen,
  ariaLabelledby,
  ariaDescribedby,
  children,
}: ModalProps): JSX.Element {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby={ariaLabelledby && ariaLabelledby}
      aria-describedby={ariaDescribedby && ariaDescribedby}
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{children}</Fade>
    </Modal>
  );
}

export default CustomModal;

const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '400px',
      minHeight: '200px',
    },
  }),
);
