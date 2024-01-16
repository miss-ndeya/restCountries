import Header from "./components/header/Header";
import useTheme from "./hooks/useTheme";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DetailsPays from "./pages/DetailsCountries";
import CountryProvider from "./contextes/CountryProvider";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} App`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:id" element={<DetailsCountries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
