const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="btn btn-primary btn-sm me-2">
    {label}
  </button>
);

export default Button;
