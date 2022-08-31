import PopUp from "../PopUp/PopUp";
import "./SpenTable.css";
import React from "react";

function TableIteam(props) {
  return (
    <li>
      {props.name} - {props.amount}
    </li>
  );
}
export default class SpenTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      spentName: "",
      spentAmount: 0,
    };
  }

  handleCallback = (popUpData) => {
    this.setState({
      spentName: popUpData.spentName,
      spentAmount: popUpData.spentAmount,
      table: [...this.state.table, popUpData],
    });
  };

  render() {
    const totalAmount = this.state.table.reduce(
      (prev, curr) => prev + curr.spentAmount,
      0
    );
    return (
      <div className="conteiner">
        <div className="title">
          <h3>Suma de gastos mensuales</h3>
          <PopUp parentCallback={this.handleCallback} />
        </div>
        <div className="list">
          <ul className="list__row">
            {this.state.table.map((iteam) => (
              <TableIteam name={iteam.spentName} amount={iteam.spentAmount} />
            ))}
          </ul>
        </div>
        <div className="totalamount">
          <h3>Tota de gastos: {totalAmount}</h3>
        </div>
      </div>
    );
  }
}
