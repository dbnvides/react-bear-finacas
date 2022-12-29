import { useState } from "react";
import { Button } from "../Button";
import "./style.css";

export const Form = ({ setList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      description,
      type,
      value,
    };
    setList(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="box-main">
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          id="description"
          required
          placeholder="Digite aqui a descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="box-values">
        <div className="box-left">
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            name="value"
            id="value"
            required
            placeholder="Digite o valor"
            min="1"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          ></input>
          <span className="real">$</span>
        </div>
        <div className="box-right">
          <label htmlFor="select-value">Tipo de valor</label>
          <select
            name="type"
            id="select-value"
            onChange={(event) =>
              setType(
                event.target.value[0].toLocaleUpperCase() +
                  event.target.value.substring(1)
              )
            }
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
      </div>
      <Button type="submit">Inserir valor</Button>
    </form>
  );
};
