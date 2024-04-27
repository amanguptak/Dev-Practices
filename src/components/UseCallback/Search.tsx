import React from 'react'
import { memo } from 'react';

interface SearchProps{
    OnChange : (text:string)=>void;
}

const Search = ({OnChange}:SearchProps) => {
    console.log('search renderd')
  return (
    <div>

        <input type="text"
        onChange= {(e)=>OnChange(e.target.value)}
        />
    </div>
  )
}

export default memo(Search)