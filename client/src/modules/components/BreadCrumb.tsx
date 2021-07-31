/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory, useLocation } from 'react-router-dom';

const StyledLink = ({
  children,
  splitPath,
}: {
  children: string;
  splitPath: Array<string>;
}) => {
  const history = useHistory();
  const locationUrl = splitPath.join('');
  return (
    <Link
      underline="hover"
      color="inherit"
      variant="body2"
      sx={{
        ':hover': {
          color: 'primary.main',
          cursor: 'pointer',
        },
      }}
      onClick={() => history.push(locationUrl)}
    >
      {children}
    </Link>
  );
};

export default function BasicBreadcrumbs() {
  const location = useLocation();
  const splitPath = location.pathname.split('/');
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 2 }}>
      {splitPath.map((location, index, splitPath) => (
        <StyledLink splitPath={splitPath.slice(0, index + 1)}>
          {location}
        </StyledLink>
      ))}
    </Breadcrumbs>
  );
}
