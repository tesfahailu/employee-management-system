import React, { Fragment, MouseEventHandler, useState } from 'react';
import { ProjectsViewPageText } from '../../../text';
import { HeadCell, Project } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import Table from '../../../modules/components/Table';
import { data } from './services';

const columns: HeadCell<Project>[] = [
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

const actionButtonLinks = {
  view: `/projects/viewOne`,
  edit: `/projects/edit`,
};

export const SectionProject = () => {
  const [rowsData, setRowsData] = useState(data);

  const handleDeleteRow =
    (
      rowId: number,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation();
      setOpen(false);
      setRowsData((rowsData) => {
        const findIndex = rowsData.findIndex((row) => row.id === rowId);
        if (findIndex === -1) return rowsData;
        if (rowsData.length === 1) return [];
        const leftArr = rowsData.slice(0, findIndex);
        const rightArrr = rowsData.slice(findIndex + 1);
        return [...leftArr, ...rightArrr];
      });
    };

  const handleDeleteRows =
    (
      selected: readonly number[],
      setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      setOpen(false);
      event.stopPropagation();
      setSelected([]);
      setRowsData((prevData) => {
        return prevData.filter((val) => selected.indexOf(val.id) === -1);
      });
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
      <Table<Project>
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