export interface ICertificatesList {
  ALL: string[];
  REQUESTS: string[];
  INITIATED: string[];
}

const certificates: ICertificatesList = Object.freeze({
  ALL: [
    'pending',
    'approved',
    'pending',
    'distributed',
    'distributed',
    'distributed',
    'approved',
    'approved',
  ],
  REQUESTS: ['pending', 'approved'],
  INITIATED: [
    'pending',
    'distributed',
    'distributed',
    'distributed',
    'approved',
    'approved',
  ],
});

export default certificates;
