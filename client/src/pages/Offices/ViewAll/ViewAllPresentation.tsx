import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../../../modules/components/Table';
import { ViewOfficesPageText } from '../../../text';
import { AddressType } from '../../../types/types';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { PageHeader } from '../../../modules/components/PageHeader';

export interface HeadCell<R> {
  id: Omit<keyof R, 'id'> | 'action';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

const headCells: Array<HeadCell<AddressType>> = [
  {
    id: 'streetAddress1',
    numeric: false,
    disablePadding: true,
    label: 'Street Address 1',
  },
  {
    id: 'streetAddress2',
    numeric: false,
    disablePadding: false,
    label: 'Street Address 2',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'state',
    numeric: false,
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'zipCode',
    numeric: false,
    disablePadding: false,
    label: 'Zip Code',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: true,
    label: 'Action',
  },
];

export interface ActionButton {
  rowId: number;
}

const ActionButtons: React.FC<ActionButton> = ({ rowId }) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <IconButton
        onClick={() => history.push(`/offices/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/offices/edit/${rowId}`)}
        size="large"
      >
        <EditIcon />
      </IconButton>
      <IconButton size="large">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

interface AddressProps {
  rowsData: AddressType[];
}

export const ViewAllPresentation: React.FC<AddressProps> = ({ rowsData }) => {
  return (
    <Fragment>
      <PageHeader
        title={ViewOfficesPageText.PageHeaderText}
        subtitle={ViewOfficesPageText.PageSubHeaderText}
        isButton={true}
        buttonText={ViewOfficesPageText.CreateButtonText}
        buttonHref="/offices/create"
      />
      <Table<AddressType>
        title={ViewOfficesPageText.TableHeaderText}
        rowsData={rowsData}
        headCells={headCells}
        ActionButtons={ActionButtons}
        minWidth="1400px"
      />
    </Fragment>
  );
};
