import React from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

export const ViewOneData = () => {
  const address = {
    id: 1,
    streetAddress1: '121 E. Cream St.',
    streetAddress2: 'Apt. 1',
    city: 'Cambridge',
    state: 'MA',
    country: 'USA',
    zipCode: '45625',
  };

  const { id, ...spreadAddress } = address;
  return <ViewOnePresentation address={spreadAddress} />;
};
