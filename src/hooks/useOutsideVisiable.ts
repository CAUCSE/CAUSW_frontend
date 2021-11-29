import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useOutsideVisiable = (ref: React.RefObject<HTMLElement>): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisiable(false);
      }
    }

    if (visiable) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, visiable, setVisiable]);

  return [visiable, setVisiable];
};
