import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const AuthUserInfo = () => {
  const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        console.log(await getAccessTokenSilently());
        console.log(user);
      };
      getToken();
    }
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
};

export default AuthUserInfo;
