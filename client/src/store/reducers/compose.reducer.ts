import {
  InitialStateType,
  COMPOSE,
  ActionType,
  AuthorizerType,
  initialState,
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

    case COMPOSE.ADD_IMAGE:
      return {
        ...state,
        certificateImageDetails: {
          ...state.certificateImageDetails,
          src: action.payload.src,
          imageDimensions: action.payload.imageDimensions,
        },
        recipientName: {
          ...state.recipientName,
          position: {
            x: action.payload.imageDimensions.width / 2,
            y: action.payload.imageDimensions.height / 2,
          },
        },
        validationDetails: {
          ...state.validationDetails,
          position: {
            x: action.payload.imageDimensions.width / 2,
            y: action.payload.imageDimensions.height / 2,
          },
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

    case COMPOSE.ADD_NEW_AUTHORIZER:
      return {
        ...state,
        authorizerDetails: [
          ...state.authorizerDetails,
          {
            id: action.payload.id,
            name: '',
            message: '',
            scale: {x: 1, y: 1},
            position: {
              x: state.certificateImageDetails.imageDimensions.width / 2,
              y: state.certificateImageDetails.imageDimensions.height / 2,
            },
            dimensions: {width: 200, height: 50},
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

    case COMPOSE.UPDATE_AUTHORIZER_POSITION:
      return {
        ...state,
        authorizerDetails: state.authorizerDetails.map(
          (authorizer: AuthorizerType) =>
            authorizer.id === action.payload.id
              ? {...authorizer, position: action.payload.position}
              : authorizer,
        ),
      };

    case COMPOSE.UPDATE_AUTHORIZER_SCALE:
      return {
        ...state,
        authorizerDetails: state.authorizerDetails.map(
          (authorizer: AuthorizerType) =>
            authorizer.id === action.payload.id
              ? {...authorizer, scale: action.payload.scale}
              : authorizer,
        ),
      };

    case COMPOSE.UPDATE_RECIPIENT_DETAILS:
      return {
        ...state,
        recipientName: {
          ...state.recipientName,
          position: action.payload.position
            ? action.payload.position
            : state.recipientName.position,
          scale: action.payload.scale
            ? action.payload.scale
            : state.recipientName.scale,
        },
      };

    case COMPOSE.UPDATE_VALIDATION_DETAILS:
      return {
        ...state,
        validationDetails: {
          ...state.validationDetails,
          position: action.payload.position
            ? action.payload.position
            : state.validationDetails.position,
          scale: action.payload.scale
            ? action.payload.scale
            : state.validationDetails.scale,
        },
      };

    case COMPOSE.RESET_REQUEST:
      return initialState;

    default:
      return state;
  }
}
