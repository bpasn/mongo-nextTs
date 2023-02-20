type NotFoundDomainError = {
    code: 'not_found';
    message: string;
    payload: {
      entityId: string;
      entityType: string;
    };
  };
  
  type UsernameTakenError = {
    code: 'username_taken';
    message: string;
    payload: {
      username: string;
    };
  };
  
  type InternalError = {
    code: 'internal_error';
    message: 'Unknown error';
  };
  
 export type ErrorHandle = NotFoundDomainError | UsernameTakenError | InternalError;
  