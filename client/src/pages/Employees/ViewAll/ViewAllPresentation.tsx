import React, { Fragment } from 'react';
import { IconButton, Stack } from '@material-ui/core';
import { Rows } from './testData';
import { ViewEmployeesPageText } from '../../../text';
import { useHistory } from 'react-router';
import Table from '../../../modules/components/Table';
import { PageHeader } from '../../../modules/components/PageHeader';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Rows | 'action';
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: true,
    label: 'Last Name',
  },
  {
    id: 'firstName',
    numeric: false,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'mobile',
    numeric: false,
    disablePadding: false,
    label: 'Mobile',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'office',
    numeric: false,
    disablePadding: false,
    label: 'Office',
  },
  {
    id: 'department',
    numeric: false,
    disablePadding: true,
    label: 'Department',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: true,
    label: 'Action',
  },
];

export interface ActionButtons {
  rowId: number;
}

const ActionButtons: React.FC<ActionButtons> = ({ rowId }) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <IconButton
        onClick={() => history.push(`/employees/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/employees/edit/${rowId}`)}
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

interface ViewAllPresentationProp {
  rowsData: Rows[];
}

export const ViewAllPresentation: React.FC<ViewAllPresentationProp> = ({
  rowsData,
}) => (
  <Fragment>
    <PageHeader
      title={ViewEmployeesPageText.PageHeaderText}
      subtitle={ViewEmployeesPageText.PageSubHeaderText}
      isButton={true}
      buttonText={ViewEmployeesPageText.CreateButtonText}
      buttonHref="/employees/create"
    />
    <Table
      rowsData={rowsData}
      headCells={headCells}
      ActionButtons={ActionButtons}
    />
  </Fragment>
);
