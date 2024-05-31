import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ListScreen from "./Screens/ListScreen";
import CadastroScreen from "./Screens/CadastroScreen";
import InitialScreen from "./Screens/InitialScreen";
import { useEffect, useState } from "react";
import FormType from "./types";

const App = () => {
  const location = useLocation();
  const [enderecos, setEnderecos] = useState<FormType[]>([]);
  const [showNavbar, setShowNavbar] = useState(location.pathname !== "/");

  useEffect(() => {
    setShowNavbar(location.pathname !== "/");

    const storedEnderecos = localStorage.getItem("enderecos");
    if (storedEnderecos) {
      setEnderecos(JSON.parse(storedEnderecos));
    }
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route
          path="/list"
          element={
            <ListScreen enderecos={enderecos} setEnderecos={setEnderecos} />
          }
        />
        <Route
          path="/cadastro"
          element={
            <CadastroScreen enderecos={enderecos} setEnderecos={setEnderecos} />
          }
        />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
