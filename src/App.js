import Header from "./components/header/Header";
import useTheme from "./hooks/useTheme";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DetailsCountries from "./pages/DetailsCountries";
import CountryProvider from "./contextes/CountryProvider";
import BorderCountries from "./pages/BorderCountries";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} App`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/country/:id"
          element={<CountryProvider children={<DetailsCountries />} />}
        ></Route>
        <Route
          path="/borderCountry/:id"
          element={<CountryProvider children={<BorderCountries />} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
