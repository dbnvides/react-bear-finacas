import { useState } from "react";
import { Card } from "../Card";
import "./style.css";

export const List = ({ list, setList }) => {
  const [filter, setFilter] = useState("todos");

  const filteredList = list.filter((element) =>
    filter === "todos" ? true : element.type === filter
  );

  return (
    <div className="main-box">
      <div className="box-buttons">
        <h3>Resumo financeiro</h3>
        {filter === "todos" ? (
          <button className="btn-selected" onClick={() => setFilter("todos")}>
            Todos
          </button>
        ) : (
          <button onClick={() => setFilter("todos")}>Todos</button>
        )}
        {filter === "Entrada" ? (
          <button className="btn-selected" onClick={() => setFilter("Entrada")}>
            Entradas
          </button>
        ) : (
          <button onClick={() => setFilter("Entrada")}>Entradas</button>
        )}
        {filter === "Saida" ? (
          <button className="btn-selected" onClick={() => setFilter("Saida")}>
            Saidas
          </button>
        ) : (
          <button onClick={() => setFilter("Saida")}>Saidas</button>
        )}
      </div>
      {filteredList.length <= 0 && (
        <ul className="list-transactions">
          <li className="box-empty">
            <div>
              <span className="img-empty"></span>
            </div>
          </li>
          <li className="box-empty">
            <div>
              <span className="img-empty"></span>
            </div>
          </li>
          <li className="box-empty">
            <div>
              <span className="img-empty"></span>
            </div>
          </li>
        </ul>
      )}
      <ul className="list-transactions">
        {filteredList.map((ele, index) => (
          <Card
            description={ele.description}
            value={ele.value}
            type={ele.type}
            test={index}
            key={index}
            list={list}
            setList={setList}
            obj={ele}
          ></Card>
        ))}
      </ul>
    </div>
  );
};
