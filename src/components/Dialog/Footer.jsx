import ButtonGroup from './ButtonGroup';

const Footer = ({ buttons, info }) => (
  <div className="d-flex justify-content-between align-items-center">
    <small className="text-muted">{info}</small>
    {buttons && <ButtonGroup buttons={buttons} />}
  </div>
);

export default Footer;
