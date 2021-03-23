import {
  InitialStateType,
  COMPOSE,
  ActionType,
  AuthorizerType,
} from '../action-types';

export default function composeReducer(
  state: InitialStateType,
  action: ActionType,
): InitialStateType {
  switch (action.type) {
    case COMPOSE.UPDATE_CERTIFICATE_DETAILS:
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
    case COMPOSE.UPDATE_AUTHORIZER_DETAILS:
      return {
        ...state,
        authorizerDetails: state.authorizerDetails.map(
          (authorizer: AuthorizerType) =>
            authorizer.id === action.payload.id
              ? {...authorizer, [action.payload.key]: action.payload.value}
              : authorizer,
        ),
      };
    case COMPOSE.ADD_IMAGE:
      return {
        ...state,
        certificateImageDetails: {
          ...state.certificateImageDetails,
          src: action.payload.src,
          imageDimensions: action.payload.imageDimensions,
        },
      };
    case COMPOSE.REMOVE_IMAGE:
      return {
        ...state,
        certificateImageDetails: {
          ...state.certificateImageDetails,
          src: '',
          imageDimensions: {width: 0, height: 0},
        },
      };
    case COMPOSE.UPDATE_STAGE_DIMENSIONS:
      return {
        ...state,
        certificateImageDetails: {
          ...state.certificateImageDetails,
          stageDimensions: action.payload,
        },
      };
    default:
      return state;
  }
}
