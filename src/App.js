function App() {
  // if (fullName) {
  //   firstName = fullName.split(" ")[0]
  //   console.log(firstName)
  // }
  // const getFirstName = (name) => {
  //   let firstName = name.split(" ")[0]
  //   return firstName
  // }
  // const getName = (name) => name.split(" ")[0]
  // console.log(getName("CyberX Ajala"))
  // const user = {
  //   name: "John Doe",
  //   age: 26,
  //   location: "Lagos",
  // }
  // const templateTwo = (
  //   <div>
  //     <h1>{user.name}</h1>
  //     <p>{user.age}</p>
  //     <p>{user.location}</p>
  //   </div>
  // )
  // const multiplier = {
  //   numbers: [3, 6, 9],
  //   multiplyBy: 4,
  //   multiply() {
  //     return this.numbers.map((number) => number +" multiplied by " + this.multiplyBy + " is " + number * this.multiplyBy )
  //   },
  // }
  // console.log(multiplier.multiply());
  // import React from "react"
  // import ReactDOM from "react-dom"
  // import "./index.css"
  // import reportWebVitals from "./reportWebVitals"
  // let appRoot = document.getElementById("root")
  // const app = {
  //   title: "Indecision App",
  //   subtitle: "Unleash your brain power",
  //   options: [],
  // }
  // const onFormSubmit = (e) => {
  //   e.preventDefault()
  //   const option = e.target.elements.option.value
  //   if (option) {
  //     app.options.push(option)
  //     e.target.elements.option.value = ""
  //     rerender()
  //   }
  // }
  // const removeAll = () => {
  //   app.options.length = 0
  //   rerender()
  // }
  // const onMakeDecision = () => {
  //   const randomNum = Math.floor(Math.random() * app.options.length)
  //   const option = app.options[randomNum]
  //   alert(option)
  //   console.log(randomNum)
  // }
  // const rerender = () => {
  //   const template = (
  //     <div>
  //       <div>
  //         <h1>{app.title}</h1>
  //         {app.subtitle && <p>{app.subtitle}</p>}
  //         <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
  //         <button disabled={app.options.length === 0} onClick={onMakeDecision}>
  //           What should I do?
  //         </button>
  //         <button onClick={removeAll}>Remove All</button>
  //       </div>
  //       <ol>
  //         {app.options.map((list) => {
  //           return <li key={list}>{list}</li>
  //         })}
  //       </ol>
  //       <form onSubmit={onFormSubmit}>
  //         <input type="text" name="option"></input>
  //         <button>Add Option</button>
  //       </form>
  //     </div>
  //   )
  //   ReactDOM.render(template, appRoot)
  // }
  // rerender()
  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals()
  // class Person {
  //   constructor(name = "Anonymous", age = 0) {
  //     this.name = name
  //     this.age = age
  //   }
  //   getGreeting() {
  //     return `Hi, I am ${this.name}`
  //   }
  //   getDescription() {
  //     return `${this.name} is ${this.age} years old`
  //   }
  // }
  // class Student extends Person {
  //   constructor(name, age, major) {
  //     super(name, age)
  //     this.major = major
  //   }
  //   hasMajor() {
  //     return !!this.major
  //   }
  //   getDescription() {
  //     let description = super.get
  //     return description
  //   }
  // }
  // class Traveler extends Person {
  //   constructor(name, age, homeLocation) {
  //     super(name, age)
  //     this.homeLocation = homeLocation
  //   }
  //   support() {
  //     return !!this.homeLocation
  //   }
  //   getGreeting() {
  //     let greeting = super.getGreeting()
  //     if (this.support()) {
  //       greeting += `, I'm visiting from ${this.homeLocation}`
  //     }
  //     return greeting
  //   }
  // }
  // const me = new Traveler("Samuel Ajala", 16, "Lagos")
  // console.log(me.getGreeting())
}

export default App
