import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="text-3xl font-bold underline" >
      <h1>
        <Navbar />
        <Home />
      </h1>
    </div>
  );
}

export default App;
