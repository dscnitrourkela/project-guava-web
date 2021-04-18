/* eslint-disable react/display-name */
import React from 'react';

// Components
import {MaterialTable} from '../widgets';

interface RecipientsTableProps {
  rows: any;
  columns: any;
}

const RecipientsTable: React.FC<RecipientsTableProps> = ({columns, rows}) => (
  <MaterialTable columns={columns} rows={rows} />
);

export default RecipientsTable;
