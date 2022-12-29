import "./style.css";

export const Card = ({
  description,
  value,
  type,
  test,
  list,
  setList,
  obj,
}) => {
  const deleteItem = (item) => {
    let newArr = list.filter((element) => element !== item);
    setList(newArr);
  };

  return (
    <li className="card" key={test}>
      {type === "Saida" ? (
        <div className="rectangle color-red"></div>
      ) : (
        <div className="rectangle color-green"></div>
      )}
      <div className="box-main">
        <h3>{description}</h3>
        <p>{type}</p>
      </div>
      <div className="box-secundary">
        <span>
          {type === "Saida"
            ? (value = value * -1).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : (value = value * 1).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </span>
        <button
          type="button"
          onClick={() => deleteItem(obj)}
          className="btn-trash"
        ></button>
      </div>
    </li>
  );
};
