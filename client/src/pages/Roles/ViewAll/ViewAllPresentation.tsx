import React, { Fragment, MouseEventHandler } from 'react';
import { RolesViewPageText } from '../../../text';
import { HeadCell, RolePageViewAll } from '../../../types/types';
import { Rows } from './ViewAllData';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import Table from '../../../modules/components/Table';

const columns: HeadCell<Rows>[] = [
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
      <SectionHeader
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
