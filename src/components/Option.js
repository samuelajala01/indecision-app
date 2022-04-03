import React from "react"
import "../index.css"

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      remove
    </button>
  </div>
)

export default Option
