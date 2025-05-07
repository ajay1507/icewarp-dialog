import './Dialog.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Dialog = ({ header, content, footer, onClose }) => {
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <Header {...header} />
        <Content>{content}</Content>
        {footer && <Footer {...footer} />}
      </div>
    </div>
  );
};

export default Dialog;
