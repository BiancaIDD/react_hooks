import React from "react";
import {
  button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./PopUp.css";

export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spentName: "", spentAmount: 0, open: false };

    this.setSpentName = this.setSpentName.bind(this);
    this.setSpentAmount = this.setSpentAmount.bind(this);
  }

  setSpentName(e) {
    this.setState({ spentName: e.target.value });
  }

  setSpentAmount(e) {
    this.setState({ spentAmount: parseFloat(e.target.value) });
  }

  openModal = () => {
    this.setState({ open: !this.state.open });
  };

  onTrigger = () => {
    this.props.parentCallback({
      spentName: this.state.spentName,
      spentAmount: this.state.spentAmount,
    });
    this.openModal();
  };

  render() {
    return (
      <div className="pop-up">
        <div className="principal">
          <div className="secondary">
            <button color="success" onClick={this.openModal}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 9.75V23.25M9.75 16.5H23.25"
                  stroke="white"
                  stroke-width="5.292"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
                <path
                  d="M16.5 30C23.9558 30 30 23.9558 30 16.5C30 9.04416 23.9558 3 16.5 3C9.04416 3 3 9.04416 3 16.5C3 23.9558 9.04416 30 16.5 30Z"
                  stroke="white"
                  stroke-width="5.292"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <Modal isOpen={this.state.open} className="modal">
          <ModalHeader className="modal__header">Gastos mensuales</ModalHeader>
          <ModalBody className="modal__body">
            <FormGroup className="modal__form">
              <label for="spent_name">Nombre del gasto:</label>
              <input
                required
                type="text"
                id="spent_name"
                onChange={this.setSpentName}
              />
              <label for="spent_amount">Cantidad gastada:</label>
              <input
                required
                type="number"
                id="spent_amount"
                onChange={this.setSpentAmount}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter className="modal__footer">
            <button className="add" onClick={this.onTrigger}>
              agregar
            </button>
            <button className="close" onClick={this.openModal}>
              cerrar
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
