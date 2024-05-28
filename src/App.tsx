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

const App = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(location.pathname !== "/");

  useEffect(() => {
    setShowNavbar(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/list" element={<ListScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
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
