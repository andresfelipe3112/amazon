import Home from "./components/Home"
import Nombre from "./components/Nombre"
import Intro from "./components/Intro"

function App() {
  return (
    <>
      <Intro />
      <div className="Container">
        <Nombre />
        <Home />
      </div>
    </>
  );
}

export default App;
