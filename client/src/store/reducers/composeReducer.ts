/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {COMPOSE} from '../types';

// @ts-ignore
export default function composeReducer(state, action) {
  switch (action.type) {
    case COMPOSE.FORM_UPDATE:
      return {
        ...state,
        certificateDetails: {
          ...state.certificateDetails,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}
