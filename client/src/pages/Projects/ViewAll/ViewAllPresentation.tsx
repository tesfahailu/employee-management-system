import React, { Fragment, MouseEventHandler } from 'react';
import { ProjectsViewPageText } from '../../../text';
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
  handleRemoveRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation: React.FC<ProjectsProps> = ({
  rowsData,
  handleRemoveRow,
}) => {
  const actionButtonLinks = {
    view: `/projects/viewOne`,
    edit: `/projects/edit`,
  };
  return (
    <Fragment>
      <PageHeader
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
        handleRemoveRow={handleRemoveRow}
        headCells={columns}
        minWidth="500px"
      />
    </Fragment>
  );
};
