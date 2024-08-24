import LeftComponent from "./components/LeftComponent"
import RightComponent from "./components/RightComponent"

function App() {

  return (
    <div className="">
      <div className="bg-white md:flex shrink-0 grow-0">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  )
}

export default App
