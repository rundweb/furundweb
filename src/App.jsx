import CaptureComponents from "./components/CaptureComponents"
import HomeComponents from "./components/HomeComponents"
import KeyComponents from "./components/KeyComponents"
import ListComponents from "./components/ListComponents"
import NavbarComponents from "./components/NavbarComponents"
import ServiceComponents from "./components/ServiceComponents"

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavbarComponents/>
      <HomeComponents/>
      <KeyComponents/>
      <CaptureComponents/>
      <ServiceComponents/>
      <ListComponents/>
    </div>
  )
}

export default App
