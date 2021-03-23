// ======================== Initial State Context Provider ======================== //
export const initialState = {
  certificateDetails: {
    title: '',
    eventName: '',
    date: new Date(Date.now()),
    time: new Date(Date.now()),
  },
  authorizerDetails: [],
};

// ======================== Initial State Types ======================== //
export interface AuthorizerType {
  id: string;
  name: string;
  message: string;
  scale: number;
  position: {x: number; y: number};
}

export interface InitialStateType {
  certificateDetails: {
    title: string;
    eventName: string;
    date: Date;
    time: Date;
  };
  authorizerDetails: AuthorizerType[] | [];
}

// ======================== Action Types ======================== //
export enum COMPOSE {
  UPDATE_CERTIFICATE_DETAILS = 'Update Certificate Details',
  ADD_NEW_AUTHORIZER = 'Add New Authorizer',
  REMOVE_EXISTING_AUTHORIZER = 'Remove Existing Authorizer',
  UPDATE_AUTHORIZER_DETAILS = 'Update Authorizer Details',
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

export type ActionType =
  | CertificateDetailsActionType
  | AddRemoveAuthorizerActionType
  | UpdateAuthorizerActionType;
