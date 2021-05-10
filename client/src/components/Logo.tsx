import { Typography, makeStyles } from '@material-ui/core';
import { Share } from '@material-ui/icons';
import React from 'react';

type StyleTextProp = {
  children?: React.ReactNode;
  userClassName?: string;
  color?:
    | 'inherit'
    | 'initial'
    | 'textSecondary'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'error'
    | undefined;
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(0.5),
  },
  secondRow: {
    marginLeft: theme.spacing(1),
  },
}));

const StyleText = ({ children, color, userClassName }: StyleTextProp) => {
  return (
    <Typography
      component="div"
      variant="h5"
      display="block"
      color={color}
      className={userClassName ? userClassName : ''}
    >
      {children}
    </Typography>
  );
};

export const StyledLogo = ({
  secondaryClass,
}: {
  secondaryClass?: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <StyleText>
      <Share color="primary" className={`${classes.icon} ${secondaryClass}`} />
      Employee
      <StyleText color="primary" userClassName={classes.secondRow}>
        Management
      </StyleText>
    </StyleText>
  );
};
