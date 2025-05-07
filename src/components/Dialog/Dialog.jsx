import { useState, useEffect } from 'react';
import './Dialog.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Dialog = ({ header, content, footer, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component has mounted
    setIsActive(true);
  }, []);

  return (
    <div
      className={`dialog-backdrop ${isActive ? 'active' : ''}`}
      onClick={onClose}
    >
      <div
        className={`dialog-container ${isActive ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Header {...header} />
        <Content>{content}</Content>
        {footer && <Footer {...footer} />}
      </div>
    </div>
  );
};

export default Dialog;
