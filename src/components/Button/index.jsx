import "./style.css";
export const Button = ({ children, funct }) => {
  return (
    <button className="btn-default" onClick={funct}>
      {children}
    </button>
  );
};
