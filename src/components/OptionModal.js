import React from "react"
import "../index.css"
import Modal from "react-modal"

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearSelectOption}
    closeTimeoutMS={4000}
    className="modal"
  >
    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.clearSelectOption}>
      Close
    </button>
  </Modal>
)

export default OptionModal
