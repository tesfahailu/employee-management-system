import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { ProjectsViewPageText } from '../../../text';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { Project } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import Table from '../../../modules/components/Table';
import { Rows } from './ViewAllData';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Rows | 'action';
  label: string;
  numeric: boolean;
}

const columns: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
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
    label: 'Action',
  },
];

interface ProjectsProps {
  rowsData: Project[];
}

export interface TableProps {
  rowsData: Array<Project[]>;
  headCells: readonly HeadCell[];
  ActionButtons: React.FC<ActionButtons>;
}

export interface ActionButtons {
  rowId: number;
}

const ActionButtons: React.FC<ActionButtons> = ({ rowId }) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <IconButton
        onClick={() => history.push(`/projects/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/projects/edit/${rowId}`)}
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

export const ViewAllPresentation: React.FC<ProjectsProps> = ({ rowsData }) => (
  <Fragment>
    <PageHeader
      title={ProjectsViewPageText.PageHeader}
      subtitle={ProjectsViewPageText.PageSubHeader}
      isButton={true}
      buttonText={ProjectsViewPageText.ButtonCreate}
      buttonHref="/projects/create"
    />
    <Table<Rows>
      title={ProjectsViewPageText.TableHeader}
      rowsData={rowsData}
      headCells={columns}
      ActionButtons={ActionButtons}
      minWidth="500px"
    />
  </Fragment>
);
