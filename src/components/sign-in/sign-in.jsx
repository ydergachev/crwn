import React from 'react';
import './sign-in.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

function SignIn() {
  const initialState = {
    email: 'aaa@gmail.com',
    password: '123'
  }

  const [formState, setFormState] = React.useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initialState);
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    console.log(value)
    setFormState({[name]: value});
  }

  return (
  <div className='sign-in'>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>
      <FormInput onChange={handleChange} name='email' type='email' value={formState.email} label='email' required/>
      <FormInput onChange={handleChange}   name='password' type="password" value={formState.password} label='password' required/>
      <CustomButton type="submit">Submit Form</CustomButton>
    </form>
  </div>
  )
} 

export default SignIn;

