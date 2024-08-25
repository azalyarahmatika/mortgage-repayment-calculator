import LeftComponent from "./components/LeftComponent"
import RightComponent from "./components/RightComponent"

function App() {

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate_100">
      <div className="bg-white md:flex md:shrink-0 md:grow-0 md:rounded-2xl overflow-hidden md:w-3/4">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  )
}

export default App
