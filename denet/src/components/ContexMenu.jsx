import React, { useEffect, useRef } from 'react';
import uploadye from '../img/uploadyellow.svg';
import newFolder from '../img/new.svg';
import recycle from '../img/delete.svg';
import info from '../img/help.svg';
const ContextMenu = ({ xPos, yPos, isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="contextMenu"
      style={{ display: isOpen ? 'block' : 'none', top: yPos, left: xPos }}
      ref={menuRef}>
      <div className="contextMenu__item">
        <img src={uploadye} alt="" className="upload__img" /> Upload
      </div>
      <div className="contextMenu__item">
        <img src={newFolder} /> New folder
      </div>
      <div className="contextMenu__item">
        {' '}
        <img src={recycle} /> Delete
      </div>
      <div className="contextMenu__item">
        {' '}
        <img src={info} /> Info
      </div>
    </div>
  );
};
export default ContextMenu;
