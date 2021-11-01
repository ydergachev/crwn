import React from 'react';
import './form-input.scss';

function FormInput({onChange, label, value, ...otherProps}) {
  console.log(value)
  return (
    <div className='group'>
      <input className='form-input' onChange={onChange} value={value} {...otherProps} />
      {/* {label ? 
      <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>
        {label}
      </label> : null} */}
    </div>
  )
}

export default FormInput;