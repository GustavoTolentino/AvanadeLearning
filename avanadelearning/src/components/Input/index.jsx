import React from 'react';
import { InputWrapper } from './styles/InputWrapper';

export function Input({ type, placeholder, value, method, icon, ...props }) {
  return (
    <InputWrapper
      ghost={ghost}
      border={border}
      banner={banner}
      as={tag}
      {...props}
    >
      {children}

      <div className="fid">
            <i className={icon}></i>
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={method}/>
        </div>
    </InputWrapper>
  );
}