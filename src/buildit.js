// import React from "react"
// import ReactDOM from "react-dom"
// import "./index.css"
// let appRoot = document.getElementById("root")

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

// class IndecisionApp extends React.Component {
//   render() {
//     const title = "Indecision"
//     const subtitle = "Put your life in the hands of a computer"
//     const options = ["Thing one", "Thing two", "Thing three"]
//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action />
//         <Options options={options} />
//         <AddOptions />
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

// class Action extends React.Component {
//   handlePick() {
//     alert("handle picked")
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handlePick}>What Should I do?</button>
//       </div>
//     )
//   }
// }

// class Options extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleRemoveAll = this.handleRemoveAll.bind(this)
//   }

//   handleRemoveAll() {
//     console.log(this.props.options)
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
//         {this.props.options.map((option) => {
//           return <Option key={option} optionText={option} />
//         })}
//       </div>
//     )
//   }
// }

// class AddOptions extends React.Component {
//   handleAddOption(e) {
//     e.preventDefault()
//     const option = e.target.elements.option.value.trim()
//     if (option) {
//       alert(option)
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     )
//   }
// }

// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>
//   }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("root"))
