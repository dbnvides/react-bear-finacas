import { Button } from "../Button";
import "./style.css";
export const Menu = ({ logout }) => {
  const logOutPage = () => {
    logout(false);
  };
  return (
    <nav className="menu">
      <div className="logo"></div>
      <Button funct={logOutPage}>Inicio</Button>
    </nav>
  );
};
