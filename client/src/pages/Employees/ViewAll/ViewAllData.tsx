import React, { MouseEventHandler, useState } from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';
import { rows } from './testData';
import { HandleDeleteRow, HandleDeleteRows } from './../../../types/types';

export const ViewAllData = () => {
  const [rowsData, setRowsData] = useState(rows);

  const handleDeleteRow: HandleDeleteRow =
    (rowId, setOpen, setOpenSnackBar) => (event) => {
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
      setOpenSnackBar({ open: true, success: true });
    };

  const handleDeleteRows: HandleDeleteRows =
    (selected, setSelected, setOpen, setOpenSnackBar) => (event) => {
      setOpen(false);
      event.stopPropagation();
      setSelected([]);
      setRowsData((prevData) => {
        return prevData.filter((val) => selected.indexOf(val.id) === -1);
      });
      setOpenSnackBar({ open: true, success: true });
    };

  return (
    <ViewAllPresentation
      rowsData={rowsData}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
    />
  );
};
