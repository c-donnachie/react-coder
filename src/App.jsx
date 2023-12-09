import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

export default function App() {
  const format = (nombre) => `@${nombre}`
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Productos"} />
    </div>
  )
}
