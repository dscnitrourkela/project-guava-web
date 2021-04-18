/* eslint-disable react/display-name */
import React from 'react';

// Libraries
import MaterialTable from 'material-table';

// Utils
import {materialTableIcons as icons} from '../../utils';

interface Props {
  rows: any;
  columns: any;
}

const RecipientTable: React.FC<Props> = ({columns, rows}) => (
  <MaterialTable
    title="Recipients List"
    columns={columns}
    data={rows}
    // @ts-ignore
    icons={icons}
    style={{
      width: '100%',
      boxShadow: 'none',
      border: '1px solid rgba(0,0,0,0.23)',
      padding: '15px 10px',
      borderRadius: 6,
    }}
    options={{
      searchFieldVariant: 'outlined',
      pageSize: 10,
      headerStyle: {
        fontSize: '18px',
      },
      rowStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.6)',
      },
    }}
  />
);

export default RecipientTable;
