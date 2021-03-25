import React from 'react';
import MaterialTable from 'material-table';

export default function RecipientTable() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Name', field: 'name'},
      {title: 'Surname', field: 'surname'},
      {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: {34: 'İstanbul', 63: 'Şanlıurfa'},
      },
    ],
    data: [
      {name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63},
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  interface IColumns {
    title: string;
    field: string;
    lookup?: any;
    type?: string;
  }

  const [columns, setColumns] = React.useState<IColumns[]>([
    {title: 'Name', field: 'name'},
    {title: 'Surname', field: 'surname'},
    {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: {34: 'İstanbul', 63: 'Şanlıurfa'},
    },
  ]);

  return (
    <MaterialTable
      title="Editable Example"
      // @ts-ignore
      columns={columns}
      data={state.data}
      // editable={{
      //   onRowAdd: newData =>
      //     new Promise(resolve => {
      //       setTimeout(() => {
      //         resolve();
      //         setState(prevState => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise(resolve => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState(prevState => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: oldData =>
      //     new Promise(resolve => {
      //       setTimeout(() => {
      //         resolve();
      //         setState(prevState => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />
  );
}
