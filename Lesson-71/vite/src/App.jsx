import Form from "./components/form";

let user = {
  name: "vite",
  surname: "js",
  age: 18
}
function App() {
  return (
    <Form {...user} />
  )
}

export default App