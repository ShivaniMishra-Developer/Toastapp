// Toast.tsx
import React from 'react';
import toastIcon from './icon.png'; 

import './Toast.css'
interface ToastProps {
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    title: string;
  }
  
  const Toast: React.FC<ToastProps> = ({ message, onConfirm, onCancel,title }) => {
    return (
      <div className="toastBox">
      <img className='imageIcon'src={toastIcon} alt="toast icon" /> {/* Use the imported image */}
        <div>

        <span className='title'>{title}</span>
        <p className='titleMessage'>{message}</p>
        <div className="buttons">
          <button className='confirm' onClick={onConfirm}>Confirm</button>
          <button className='cancel' onClick={onCancel}>Cancel</button>
        </div>
        </div>

      </div>
    );
  };
  
  export default Toast;
  