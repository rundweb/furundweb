import CaptureComponents from "./components/CaptureComponents"
import HomeComponents from "./components/HomeComponents"
import KeyComponents from "./components/KeyComponents"
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
    </div>
  )
}

export default App
