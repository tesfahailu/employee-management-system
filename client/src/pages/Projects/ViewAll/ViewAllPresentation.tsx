import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { ViewProjectsPageText } from '../../../text';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { ProjectType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import Table from '../../../modules/components/Table';
import { Rows } from './ViewAllData';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Rows | 'action';
  label: string;
  numeric: boolean;
}

const columns: readonly HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
];

interface ProjectsProps {
  rowsData: ProjectType[];
}

export interface TableProps {
  rowsData: Array<ProjectType[]>;
  headCells: readonly HeadCell[];
  ActionButtons: React.FC<ActionButtons>;
}

export interface ActionButtons {
  rowId: number;
}

const ActionButtons = (id: number | string) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <IconButton
        onClick={() => history.push(`/projects/viewOne/${id}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/projects/edit/${id}`)}
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

export const ViewAllPresentation: React.FC<ProjectsProps> = ({ rowsData }) => {
  return (
    <Fragment>
      <PageHeader
        title={ViewProjectsPageText.PageHeaderText}
        subtitle={ViewProjectsPageText.PageSubHeaderText}
        isButton={true}
        buttonText={ViewProjectsPageText.CreateButtonText}
        buttonHref="/projects/create"
      />
      {/* <Table
        rowsData={rowsData}
        headCells={columns}
        ActionButtons={ActionButtons}
      /> */}
    </Fragment>
  );
};
