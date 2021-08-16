import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment, MouseEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import { RolesViewPageText } from '../../../text';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { Role, RolePageViewAll } from '../../../types/types';
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

export const ViewAllPresentation = ({
  rowsData,
  handleDeleteRow,
  handleDeleteRows,
}: RolePageViewAll) => {
  const actionButtonLinks = {
    view: `/roles/viewOne`,
    edit: `/roles/edit`,
  };
  return (
    <Fragment>
      <PageHeader
        title={RolesViewPageText.PageHeader}
        subtitle={RolesViewPageText.PageSubHeader}
        isButton={true}
        buttonText={RolesViewPageText.ButtonCreate}
        buttonHref="/roles/create"
      />
      <Table<Rows>
        actionButtonLinks={actionButtonLinks}
        title={RolesViewPageText.TableHeader}
        rowsData={rowsData}
        headCells={columns}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        minWidth="500px"
      />
    </Fragment>
  );
};
