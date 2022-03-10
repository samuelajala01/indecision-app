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

  const app = {
    title: "Indecision App",
    subtitle: "Unleash your brain power",
    options: [],
  }

  // const user = {
  //   name: "John Doe",
  //   age: 26,
  //   location: "Lagos",
  // }

  const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
      app.options.push(option)
      e.target.elements.option.value = ""
    }
  }

  const template = (
    <div>
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <p>{app.options.length}</p>
      </div>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options"></input>
        <button>Add Option</button>
      </form>
    </div>
  )

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

  return (
    <div className="App">
      <div>{template}</div>
    </div>
  )
}

export default App
