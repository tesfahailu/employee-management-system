import React, { Fragment, MouseEventHandler } from 'react';
import Table from '../../../modules/components/Table';
import { OfficesViewPageText } from '../../../text';
import { Address, HeadCell, OfficePageViewAll } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';

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
}: OfficePageViewAll) => {
  const actionButtonLinks = {
    view: `/offices/viewOne`,
    edit: `/offices/edit`,
  };
  return (
    <Fragment>
      <SectionHeader
        title={OfficesViewPageText.PageHeader}
        subtitle={OfficesViewPageText.PageSubHeader}
        isButton={true}
        buttonText={OfficesViewPageText.ButtonCreate}
        buttonHref="/offices/create"
      />
      <Table<Address>
        actionButtonLinks={actionButtonLinks}
        title={OfficesViewPageText.TableHeader}
        rowsData={rowsData}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        headCells={headCells}
        minWidth="1400px"
      />
    </Fragment>
  );
};
