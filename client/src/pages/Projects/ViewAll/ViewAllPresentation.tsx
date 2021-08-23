import React, { Fragment, MouseEventHandler } from 'react';
import { ProjectsViewPageText } from '../../../text';
import { Project, ProjectPageViewAll, HeadCell } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import Table from '../../../modules/components/Table';
import { Rows } from './ViewAllData';

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

interface ProjectsProps {
  rowsData: Project[];
  handleDeleteRow: (
    rowId: number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => MouseEventHandler<HTMLButtonElement>;
  handleDeleteRows: (
    selected: readonly number[],
    setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation = ({
  rowsData,
  handleDeleteRow,
  handleDeleteRows,
}: ProjectPageViewAll) => {
  const actionButtonLinks = {
    view: `/projects/viewOne`,
    edit: `/projects/edit`,
  };
  return (
    <Fragment>
      <SectionHeader
        title={ProjectsViewPageText.PageHeader}
        subtitle={ProjectsViewPageText.PageSubHeader}
        isButton={true}
        buttonText={ProjectsViewPageText.ButtonCreate}
        buttonHref="/projects/create"
      />
      <Table<Rows>
        actionButtonLinks={actionButtonLinks}
        title={ProjectsViewPageText.TableHeader}
        rowsData={rowsData}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        headCells={columns}
        minWidth="500px"
      />
    </Fragment>
  );
};
