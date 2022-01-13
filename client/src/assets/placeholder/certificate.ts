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

// const [details] = React.useState({
//   id: '6969696969',
//   name: 'HackNITR 3.0 Hackathon',
//   date: '15th January 2021',
//   signee: ['Ritesh Patil', 'Astha Nayak']
// })

export default Object.freeze({
  ...initialState,
  certificateImageDetails: {
    imageDimensions: {
      height: 612,
      width: 792,
    },
    stageDimensions: {
      width: 550,
      height: 550,
    },
    src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1642091542/Particpation_Certificate_1_tbj63v.png',
  },
  recipientName: {
    scale: {x: 1, y: 1},
    dimensions: {width: 400, height: 50},
    name: 'Abhibhaw Asthana',
    id: 'recipient-name-id',
    position: {
      x: 350,
      y: 255,
    },
  },
  validationDetails: {
    scale: {x: 1, y: 1},
    dimensions: {width: 200, height: 50},
    name: 'DreamTeam',
    id: 'recipient-team-name-id',
    position: {
      x: 460,
      y: 327,
    }
  },
  recipientDetails,
});
