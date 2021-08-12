import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

interface UrlFragment {
  label: string;
  url: string;
}

const StyledLink = ({
  children,
  obj,
  isLastEl,
}: {
  children: string;
  obj: UrlFragment;
  isLastEl: boolean;
}) => {
  const history = useHistory();

  return !isLastEl ? (
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
      onClick={() => history.push(obj.url)}
    >
      <Typography variant="body2">{children}</Typography>
    </Link>
  ) : (
    <Typography variant="body2">{children}</Typography>
  );
};

export default function BasicBreadcrumbs() {
  const location = useLocation();
  const splitPathArr = location.pathname.split('/').filter((e) => e);
  const fragArray: UrlFragment[] = [];

  splitPathArr.forEach((frag, index, arr) => {
    const parsedFrag = parseInt(frag);
    const isParsedFragNumber = !isNaN(parsedFrag);
    if (isParsedFragNumber) return;

    const isBeforeLastEl = index < arr.length - 1;
    if (['create', 'edit', 'viewOne'].includes(frag) && isBeforeLastEl) {
      const nextVal = arr[index + 1];
      const parsedNextVal = parseInt(nextVal);
      const isNextValNum = !isNaN(parsedNextVal);

      const previousVal = arr[index - 1];
      const isBeforeSecondToLastEl = index < arr.length - 2;

      if (
        isNextValNum &&
        !['create', 'edit', 'viewOne'].includes(previousVal)
      ) {
        return fragArray.push({
          label: frag + '-' + parsedNextVal,
          url: fragArray[index - 1]['url'] + `/${frag}/${parsedNextVal}`,
        });
      } else if (
        isNextValNum &&
        ['create', 'edit', 'viewOne'].includes(previousVal)
      ) {
        return fragArray.push({
          label: frag + '-' + parsedNextVal,
          url: fragArray[index - 2]['url'],
        });
      } else if (!isNextValNum && isBeforeSecondToLastEl) {
        const parsed = parseInt(arr[index + 2]);
        if (!isNaN(parsed)) {
          return fragArray.push({
            label: frag,
            url: fragArray[index - 1]['url'] + `/${frag}/${parsed}`,
          });
        }
      }
    }

    return fragArray.push({
      label: frag,
      url: index === 0 ? `/${frag}` : fragArray[index - 1]['url'] + `/${frag}`,
    });
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 2 }}>
      {fragArray.map((obj, index, arr) => {
        const isLastEl = index === arr.length - 1;
        return (
          <StyledLink obj={obj} isLastEl={isLastEl}>
            {obj.label}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
}
