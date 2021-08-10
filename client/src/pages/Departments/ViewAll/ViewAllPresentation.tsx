import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { ViewDepartmentsPageText } from '../../../text';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { PageHeader } from '../../../modules/components/PageHeader';
import { HeadCell } from '../../Employees/ViewAll/ViewAllPresentation';
import Table from '../../../modules/components/Table';
import { Role } from '../../../types/types';

const headCells: Array<HeadCell<Role>> = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: true,
    label: 'Actions',
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
        onClick={() => history.push(`/departments/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/departments/edit/${rowId}`)}
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

interface DepartmentProps {
  rowsData: Role[];
}

export const ViewAllPresentation: React.FC<DepartmentProps> = ({
  rowsData,
}) => (
  <Fragment>
    <PageHeader
      title={ViewDepartmentsPageText.PageHeaderText}
      subtitle={ViewDepartmentsPageText.PageSubHeaderText}
      isButton={true}
      buttonText={ViewDepartmentsPageText.CreateButtonText}
      buttonHref="/departments/create"
    />
    <Table<Role>
      title={ViewDepartmentsPageText.TableHeaderText}
      rowsData={rowsData}
      headCells={headCells}
      ActionButtons={ActionButtons}
      minWidth="850px"
    />
  </Fragment>
);
