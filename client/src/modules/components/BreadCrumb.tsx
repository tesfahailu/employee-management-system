import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

interface UrlFragment {
  name: string;
  label: string;
  url: string;
}

const StyledLink = ({
  children,
  fragmentObj,
  isLast,
}: {
  children: string;
  fragmentObj: UrlFragment;
  isLast: boolean;
}) => {
  const history = useHistory();

  return !isLast ? (
    <Link
      underline={'hover'}
      color="inherit"
      variant="body2"
      sx={{
        ':hover': {
          color: 'primary.main',
          cursor: 'pointer',
        },
      }}
      onClick={() => history.push(fragmentObj.url)}
    >
      <Typography variant="body2">{children}</Typography>
    </Link>
  ) : (
    <Typography variant="body2">{children}</Typography>
  );
};

export default function BasicBreadcrumbs() {
  const location = useLocation();
  const splitPath = location.pathname.split('/').filter((e) => e);
  const pathArray: UrlFragment[] = [];

  splitPath.forEach((fragment, index, array) => {
    const parsedFragment = parseInt(fragment);
    const isNumber = !isNaN(parsedFragment);
    if (isNumber) return;

    if (
      (fragment === 'create' ||
        fragment === 'edit' ||
        fragment === 'viewOne') &&
      index < array.length - 1
    ) {
      const nextValueParsed = parseInt(array[index + 1]);
      const prevValue = array[index - 1];
      if (
        !isNaN(nextValueParsed) &&
        prevValue !== 'viewOne' &&
        prevValue !== 'edit' &&
        prevValue !== 'create'
      ) {
        return pathArray.push({
          name: fragment,
          label: fragment + '-' + nextValueParsed,
          url: pathArray[index - 1]['url'] + `/${fragment}/${nextValueParsed}`,
        });
      } else if (
        !isNaN(nextValueParsed) &&
        (prevValue === 'create' ||
          prevValue === 'edit' ||
          prevValue === 'viewOne')
      ) {
        return pathArray.push({
          name: fragment,
          label: fragment + '-' + nextValueParsed,
          url: pathArray[index - 2]['url'],
        });
      } else if (index < array.length - 2) {
        const parsed = parseInt(array[index + 2]);
        if (!isNaN(parsed)) {
          return pathArray.push({
            name: fragment,
            label: fragment,
            url: pathArray[index - 1]['url'] + `/${fragment}/${parsed}`,
          });
        }
      }
    }

    return pathArray.push({
      name: fragment,
      label: fragment,
      url:
        index === 0
          ? `/${fragment}`
          : pathArray[index - 1]['url'] + `/${fragment}`,
    });
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 2 }}>
      {pathArray.map((pathObj, index, pathArray) => {
        const isLast = index === pathArray.length - 1;
        return (
          <StyledLink fragmentObj={pathObj} isLast={isLast}>
            {pathObj.label}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
}
