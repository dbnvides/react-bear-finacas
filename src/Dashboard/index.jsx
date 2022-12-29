import { useState } from "react";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Menu } from "../components/Menu";
import { TotalMoney } from "../components/TotalMoney";
import "./style.css";

export const Dashboard = ({ logout }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const totalValue = () => {
    let allValue = listTransactions.reduce(
      (elv, el) => (el.type === "Saida" ? Number(el.value) * -1 + elv : elv + Number(el.value)),
      0
    );
    return allValue;
  };

  const addNewTransiction = (newValue) => {
    setListTransactions([...listTransactions, newValue]);
  };

  return (
    <div className="App-dashboard">
      <header className="App-header">
        <Container>
          <Menu logout={logout} />
        </Container>
      </header>

      <Container>
        <main className="main-dashboard">
          <section className="section-formulary">
            <Form setList={addNewTransiction} />
            {listTransactions.length > 0 && <TotalMoney total={totalValue()} />}
          </section>
          <section className="section-list">
            <List list={listTransactions} setList={setListTransactions} />
          </section>
        </main>
      </Container>
    </div>
  );
};
