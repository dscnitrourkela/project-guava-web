import {COMPOSE} from '../types';
import {InitialStateType} from '../action-types';

export interface ActionType {
  type: string;
  payload?: any;
}

export function composeReducer(
  state: InitialStateType,
  action: ActionType,
): InitialStateType {
  switch (action.type) {
    case COMPOSE.FORM_UPDATE:
      return {
        ...state,
        certificateDetails: {
          ...state.certificateDetails,
          [action.payload.key]: action.payload.value,
        },
      };
    case COMPOSE.ADD_NEW_AUTHORIZER:
      return {
        ...state,
        authorizerDetails: [
          ...state.authorizerDetails,
          {
            id: action.payload.id,
            name: '',
            message: '',
            scale: 1,
            position: {x: 0, y: 0},
          },
        ],
      };
    case COMPOSE.REMOVE_EXISTING_AUTHORIZER:
      return {
        ...state,
        authorizerDetails: state.authorizerDetails.filter(
          authorizer => authorizer.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}
