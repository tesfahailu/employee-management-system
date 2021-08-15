import { IconButton, Stack } from '@material-ui/core';
import React, { Fragment, MouseEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../../../modules/components/Table';
import { OfficesViewPageText } from '../../../text';
import { Address } from '../../../types/types';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { PageHeader } from '../../../modules/components/PageHeader';

export interface HeadCell<R> {
  id: Omit<keyof R, 'id'> | 'action';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

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
        onClick={() => history.push(`/offices/viewOne/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`/offices/edit/${rowId}`)}
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

interface AddressProps {
  rowsData: Address[];
  handleRemoveRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation: React.FC<AddressProps> = ({
  rowsData,
  handleRemoveRow,
}) => (
  <Fragment>
    <PageHeader
      title={OfficesViewPageText.PageHeader}
      subtitle={OfficesViewPageText.PageSubHeader}
      isButton={true}
      buttonText={OfficesViewPageText.ButtonCreate}
      buttonHref="/offices/create"
    />
    <Table<Address>
      title={OfficesViewPageText.TableHeader}
      rowsData={rowsData}
      handleRemoveRow={handleRemoveRow}
      headCells={headCells}
      ActionButtons={ActionButtons}
      minWidth="1400px"
    />
  </Fragment>
);
