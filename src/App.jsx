import HomeComponents from "./components/HomeComponents"
import KeyComponents from "./components/KeyComponents"
import NavbarComponents from "./components/NavbarComponents"

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavbarComponents/>
      <HomeComponents/>
      <KeyComponents/>
    </div>
  )
}

export default App
