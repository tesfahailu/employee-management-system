import React, { Fragment, MouseEventHandler } from 'react';
import { DepartmentsViewPageText } from '../../../text';
import { PageHeader } from '../../../modules/components/PageHeader';
import { HeadCell } from '../../Employees/ViewAll/ViewAllPresentation';
import Table from '../../../modules/components/Table';
import { DepartmentPageViewAll, Role } from '../../../types/types';

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

export const ViewAllPresentation = ({
  rowsData,
  handleDeleteRow,
  handleDeleteRows,
}: DepartmentPageViewAll) => {
  const actionButtonLinks = {
    view: `/departments/viewOne`,
    edit: `/departments/edit`,
  };
  return (
    <Fragment>
      <PageHeader
        title={DepartmentsViewPageText.PageHeader}
        subtitle={DepartmentsViewPageText.PageSubHeader}
        isButton={true}
        buttonText={DepartmentsViewPageText.ButtonCreate}
        buttonHref="/departments/create"
      />
      <Table<Role>
        actionButtonLinks={actionButtonLinks}
        title={DepartmentsViewPageText.TableHeader}
        rowsData={rowsData}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        headCells={headCells}
        minWidth="850px"
      />
    </Fragment>
  );
};
