const IconText = ({ icon, text }) => (
  <div className="d-flex align-items-center gap-2">
    {icon && <span>{icon}</span>}
    <h5 className="mb-0">{text}</h5>
  </div>
);

export default IconText;
