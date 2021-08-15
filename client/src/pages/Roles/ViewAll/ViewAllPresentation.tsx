import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment, MouseEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import { RolesViewPageText } from '../../../text';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { Role } from '../../../types/types';
import { Rows } from './ViewAllData';
import { PageHeader } from '../../../modules/components/PageHeader';
import Table from '../../../modules/components/Table';

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
        onClick={() => history.push(`/roles/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/roles/edit/${rowId}`)}
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

interface RolesProps {
  rowsData: Role[];
  handleRemoveRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation: React.FC<RolesProps> = ({
  rowsData,
  handleRemoveRow,
}) => (
  <Fragment>
    <PageHeader
      title={RolesViewPageText.PageHeader}
      subtitle={RolesViewPageText.PageSubHeader}
      isButton={true}
      buttonText={RolesViewPageText.ButtonCreate}
      buttonHref="/roles/create"
    />
    <Table<Rows>
      title={RolesViewPageText.TableHeader}
      rowsData={rowsData}
      headCells={columns}
      handleRemoveRow={handleRemoveRow}
      ActionButtons={ActionButtons}
      minWidth="500px"
    />
  </Fragment>
);
