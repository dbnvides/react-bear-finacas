import { Button } from "../components/Button";
import { Container } from "../components/Container";
import "./style.css";

export const HomePage = ({ login }) => {
  const loginPage = () => {
    login(true);
  };

  return (
    <div className="main-home-page">
      <Container>
        <div className="main-section">
          <section className="sec-description">
            <p className="logo-type">
              <span>BEAR</span> Finanças
            </p>
            <h2>Centralize o controle das suas finanças</h2>
            <p>de forma rápida e segura</p>
            <Button funct={loginPage}>Iniciar</Button>
          </section>
          <section className="sec-img">
            <div className="imgNukenzie" />
          </section>
        </div>
      </Container>
    </div>
  );
};
