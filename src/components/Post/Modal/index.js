import React, { useEffect } from 'react';
import { Wrapper } from './modal.style';
import ReactPortal from '../ReactPortal';

export const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
      <Wrapper>
        <div className='modal-content'>{children}</div>
      </Wrapper>
    </ReactPortal>
  );
};
