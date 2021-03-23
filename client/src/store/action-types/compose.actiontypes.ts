// ======================== Initial State Context Provider ======================== //
export const initialState = {
  certificateDetails: {
    title: '',
    eventName: '',
    date: new Date(Date.now()),
    time: new Date(Date.now()),
  },
  certificateImageDetails: {
    src: '',
    imageDimensions: {
      width: 0,
      height: 0,
    },
    stageDimensions: {
      width: 550,
      height: 550,
    },
  },
  recipientName: {
    position: {x: 0, y: 0},
    scale: {x: 1, y: 1},
    dimensions: {width: 200, height: 50},
    name: 'Recipient Name',
    id: 'recipient-name-id',
  },
  validationDetails: {
    position: {x: 0, y: 0},
    scale: {x: 1, y: 1},
    dimensions: {width: 200, height: 100},
    name: 'Certificate ID: \n Issue Date: ',
    id: 'certificate-validation-id',
  },
  authorizerDetails: [],
};

// ======================== Initial State Types ======================== //

export interface CoordinatesType {
  x: number;
  y: number;
}

export interface DimensionsType {
  width: number;
  height: number;
}

export interface AuthorizerType {
  id: string;
  name: string;
  message: string;
  scale: CoordinatesType;
  position: CoordinatesType;
  dimensions: DimensionsType;
}

export interface RecipientDetailsType {
  position: CoordinatesType;
  scale: CoordinatesType;
  dimensions: DimensionsType;
  name: string;
  id: string;
}

export interface InitialStateType {
  certificateDetails: {
    title: string;
    eventName: string;
    date: Date;
    time: Date;
  };
  certificateImageDetails: {
    src: string;
    imageDimensions: DimensionsType;
    stageDimensions: DimensionsType;
  };
  authorizerDetails: AuthorizerType[] | [];
  recipientName: RecipientDetailsType;
  validationDetails: RecipientDetailsType;
}

// ======================== Action Types ======================== //
export enum COMPOSE {
  UPDATE_CERTIFICATE_DETAILS = 'Update Certificate Details',
  ADD_NEW_AUTHORIZER = 'Add New Authorizer',
  REMOVE_EXISTING_AUTHORIZER = 'Remove Existing Authorizer',
  UPDATE_AUTHORIZER_DETAILS = 'Update Authorizer Details',
  UPDATE_AUTHORIZER_POSITION = 'Update Authorizer Position Details',
  UPDATE_AUTHORIZER_SCALE = 'Update Authorizer Scale Details',
  ADD_IMAGE = 'Add Image to Canvas',
  REMOVE_IMAGE = 'Remove Canvas Image',
  UPDATE_IMAGE_DIMENSIONS = 'Add Image Dimensions',
  UPDATE_STAGE_DIMENSIONS = 'Update Stage Dimensions',
  UPDATE_RECIPIENT_DETAILS = 'Update Recipient Details',
  UPDATE_VALIDATION_DETAILS = 'Update Validation Details',
}

// ======================== Action Interfaces ======================== //
export interface CertificateDetailsActionType {
  type: COMPOSE.UPDATE_CERTIFICATE_DETAILS;
  payload: {
    key: 'title' | 'eventName' | 'date' | 'time';
    value: string | Date | null;
  };
}

export interface AddRemoveAuthorizerActionType {
  type: COMPOSE.ADD_NEW_AUTHORIZER | COMPOSE.REMOVE_EXISTING_AUTHORIZER;
  payload: {id: string};
}

export interface UpdateAuthorizerActionType {
  type: COMPOSE.UPDATE_AUTHORIZER_DETAILS;
  payload: {
    id: string;
    key: 'name' | 'message' | 'scale' | 'position';
    value: string | number | {x: number; y: number};
  };
}

export interface UpdateAuthorizerPosition {
  type: COMPOSE.UPDATE_AUTHORIZER_POSITION;
  payload: {
    id: string;
    position: {x: number; y: number};
  };
}

export interface UpdateAuthorizerScale {
  type: COMPOSE.UPDATE_AUTHORIZER_SCALE;
  payload: {
    id: string;
    scale: {x: number; y: number};
  };
}

export interface AddCertificateImage {
  type: COMPOSE.ADD_IMAGE;
  payload: {
    src: string;
    imageDimensions: DimensionsType;
  };
}

export interface RemoveCertificateImage {
  type: COMPOSE.REMOVE_IMAGE;
}

export interface UpdateStageDimensions {
  type: COMPOSE.UPDATE_STAGE_DIMENSIONS;
  payload: DimensionsType;
}

export interface UpdateRecipientDetails {
  type: COMPOSE.UPDATE_RECIPIENT_DETAILS;
  payload: {
    id: string;
    position?: CoordinatesType;
    scale?: CoordinatesType;
  };
}

export interface UpdateValidationDetails {
  type: COMPOSE.UPDATE_VALIDATION_DETAILS;
  payload: {
    id: string;
    position?: CoordinatesType;
    scale?: CoordinatesType;
  };
}

export type ActionType =
  | CertificateDetailsActionType
  | AddRemoveAuthorizerActionType
  | UpdateAuthorizerActionType
  | UpdateAuthorizerPosition
  | UpdateAuthorizerScale
  | AddCertificateImage
  | RemoveCertificateImage
  | UpdateStageDimensions
  | UpdateRecipientDetails
  | UpdateValidationDetails;
