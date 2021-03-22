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
  authorizerDetails: AuthorizerType[];
}
