import Home from "./components/Home/Home";
import Lend from "./components/Lend/Lend";
import Offers from "./components/offers/Offers";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lend" element={<Lend />} />
      <Route path="/offers" element={<Offers />} />
      </Routes>
    </div>
  );
}

export default App;
