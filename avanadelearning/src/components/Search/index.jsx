 import React from 'react';
// import { HiSearch } from 'react-icons/HiSearch';
import { SearchWrapper } from './style/SearchWrapper';

export function InputS({ placeholder, value, method, icon, ...props }) {
    return(
        <SearchWrapper>
            <input
                placeholder={placeholder}
                value={value}
                onChange={method}
                {...props}
            />
                {icon}
        </SearchWrapper>
    )
}