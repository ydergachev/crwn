import React from 'react';
import './auth.scss';

import SignIn from '../../components/sign-in/sign-in';

function AuthPage() {
  return (
    <div className='sign-in-and-sign-up'>
       <SignIn />
    </div>
  );
}

export default AuthPage;