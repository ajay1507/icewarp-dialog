import Button from './Button';

const ButtonGroup = ({ buttons = [] }) => (
  <div className="d-flex">
    {buttons.map((btn, i) => (
      <Button key={i} {...btn} />
    ))}
  </div>
);

export default ButtonGroup;
