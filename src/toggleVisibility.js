import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

let appRoot = document.getElementById("root")

// let visibility = false
// const toggleVisibility = () => {
//   visibility = !visibility
//   render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>These are some details</p>
//         </div>
//       )}
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// render()

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      Visibility: false,
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        Visibility: !prevState.Visibility,
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {this.state.Visibility ? "Hide details" : "Show Details"}
        </button>
        {this.state.Visibility && <p>This is Some text</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, appRoot)
