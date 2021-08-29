import React, { MouseEventHandler, useState } from 'react';
import Table from '../../../modules/components/Table';
import { OfficesViewPageText } from '../../../text';
import { Address, HeadCell } from '../../../types/types';
import { rows } from './services';

const headCells: Array<HeadCell<Address>> = [
  {
    id: 'streetAddress1',
    numeric: false,
    disablePadding: true,
    label: 'Street Address 1',
  },
  {
    id: 'streetAddress2',
    numeric: false,
    disablePadding: false,
    label: 'Street Address 2',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'state',
    numeric: false,
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'zipCode',
    numeric: false,
    disablePadding: false,
    label: 'Zip Code',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: true,
    label: 'Actions',
  },
];

const actionButtonLinks = {
  view: `/offices/viewOne`,
  edit: `/offices/edit`,
};

export const SectionOffice = () => {
  const [rowsData, setRowsData] = useState(rows);
  const handleDeleteRow =
    (
      rowId: number,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation();
      setOpen(false);
      setRowsData((previousRowsData) => {
        const findIndex = previousRowsData.findIndex((row) => row.id === rowId);
        if (findIndex === -1) return previousRowsData;
        if (previousRowsData.length === 1) return [];
        const beforeSplit = previousRowsData.slice(0, findIndex);
        const afterSplit = previousRowsData.slice(findIndex + 1);
        return [...beforeSplit, ...afterSplit];
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
    <Table<Address>
      actionButtonLinks={actionButtonLinks}
      title={OfficesViewPageText.TableHeader}
      rowsData={rowsData}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
      headCells={headCells}
      minWidth="1400px"
    />
  );
};
