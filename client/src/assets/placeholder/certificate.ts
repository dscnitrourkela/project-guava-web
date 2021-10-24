import {initialState} from '../../store/action-types';

const recipientDetails = {
  columns: [
    {
      title: 'Sr. No.',
      field: 'srNo',
      tableData: {
        columnOrder: 0,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 0,
      },
    },
    {
      title: 'Name',
      field: 'name',
      tableData: {
        columnOrder: 1,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 1,
      },
    },
    {
      title: 'Email',
      field: 'email',
      tableData: {
        columnOrder: 2,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 2,
      },
    },
    {
      title: 'Field',
      field: 'field',
      tableData: {
        columnOrder: 3,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 3,
      },
    },
  ],
  rows: [
    {
      srNo: '1',
      name: 'ritesh',
      email: 'ritesh@gmail.com',
      field: 'eb',
      tableData: {
        id: 0,
      },
    },
    {
      srNo: '2',
      name: 'astha',
      email: 'astha@gmail.com',
      field: 'eb',
      tableData: {
        id: 1,
      },
    },
    {
      srNo: '3',
      name: 'sriram ',
      email: 'sriram@gmail.com',
      field: 'eb',
      tableData: {
        id: 2,
      },
    },
    {
      srNo: '4',
      name: 'abhibhaw ',
      email: 'abhibhaw@gmail.com',
      field: 'eb',
      tableData: {
        id: 3,
      },
    },
  ],
};

export default Object.freeze({
  ...initialState,
  certificateImageDetails: {
    imageDimensions: {
      width: 788,
      height: 530,
    },
    stageDimensions: {
      width: 550,
      height: 550,
    },
    src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-guava/assets/Group_6_lnrhcz.png',
  },
  recipientName: {
    ...initialState.recipientName,
    position: {
      x: 409,
      y: 275,
    },
  },
  validationDetails: {
    ...initialState.validationDetails,
    position: {
      x: 177,
      y: 441,
    },
  },
  recipientDetails,
});
