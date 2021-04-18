/* eslint-disable react/display-name */
import React, {forwardRef} from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faCheckCircle,
  faTimes,
  faTrashAlt,
  faInfoCircle,
  faEdit,
  faExternalLinkAlt,
  faFilter,
  faStepBackward,
  faStepForward,
  faChevronLeft,
  faChevronRight,
  faSort,
  faMinusCircle,
  faColumns,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const icon = (faIcon: any) =>
  forwardRef((props, ref) => (
    <FontAwesomeIcon {...props} forwardedRef={ref} size="sm" icon={faIcon} />
  ));
export default {
  Add: icon(faPlusCircle),
  Check: icon(faCheckCircle),
  Clear: icon(faTimes),
  Delete: icon(faTrashAlt),
  DetailPanel: icon(faInfoCircle),
  Edit: icon(faEdit),
  Export: icon(faExternalLinkAlt),
  Filter: icon(faFilter),
  FirstPage: icon(faStepBackward),
  LastPage: icon(faStepForward),
  NextPage: icon(faChevronRight),
  PreviousPage: icon(faChevronLeft),
  ResetSearch: icon(faTimes),
  Search: icon(faSearch),
  SortArrow: icon(faSort),
  ThirdStateCheck: icon(faMinusCircle),
  ViewColumn: icon(faColumns),
};
