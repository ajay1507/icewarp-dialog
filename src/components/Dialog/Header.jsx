import IconText from './IconText';
import ButtonGroup from './ButtonGroup';

const Header = ({ icon, title, buttons }) => (
  <div className="d-flex justify-content-between align-items-center mb-3">
    <IconText icon={icon} text={title} />
    {buttons && <ButtonGroup buttons={buttons} />}
  </div>
);

export default Header;
