import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ListScreen from "./Screens/ListScreen";
import CadastroScreen from "./Screens/CadastroScreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/list" element={<ListScreen />} />
          <Route path="/cadastro" element={<CadastroScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
