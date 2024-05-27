// Toast1.tsx
import React, { useEffect, useState } from 'react';
import './Toast1.css';

type ToastProps = {
  message: string;
  type: string;
};

const Toast1: React.FC<ToastProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`toast1 toast-${type}`}>
      {message}
    </div>
  );
};

export default Toast1;