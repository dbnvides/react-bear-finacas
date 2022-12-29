import "./style.css";

export const TotalMoney = ({ total }) => {
  return (
    <div className="card-money">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <span>R$ {total}</span>
    </div>
  );
};
