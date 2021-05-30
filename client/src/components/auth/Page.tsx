import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import AuthUserInfo from './UserInfo';

const AuthPage = () => (
  <>
    <LoginButton />
    <LogoutButton />
    <AuthUserInfo />
  </>
);

export default AuthPage;
