import React, { useEffect } from 'react'

export const useTitle = (title) => {
  
    useEffect(() => {
     document.title=`${title} / Cinimate`;
    }, [title])
    
  return null;
}
