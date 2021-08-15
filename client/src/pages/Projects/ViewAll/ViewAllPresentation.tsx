import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment, MouseEventHandler } from 'react';
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

export interface ActionButton<R> {
  rowId: number;
  handleRemoveRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
  index: number;
}

const ActionButtons = <R,>({
  rowId,
  handleRemoveRow,
  index,
}: ActionButton<R>) => {
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
      <IconButton size="large" onClick={handleRemoveRow(rowId)}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

interface ProjectsProps {
  rowsData: Project[];
  handleRemoveRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation: React.FC<ProjectsProps> = ({
  rowsData,
  handleRemoveRow,
}) => (
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
      handleRemoveRow={handleRemoveRow}
      headCells={columns}
      ActionButtons={ActionButtons}
      minWidth="500px"
    />
  </Fragment>
);
