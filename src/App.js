import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./HomePage/Header/Header";
import Container from "./HomePage/Container/Container1/Container";
import Footer from "./HomePage/Footer/Footer";
import ContainerItem from "./HomePage/Container/Container2/ContainerItem";
import { Route, Routes } from "react-router-dom";

function App() {
  const the = useContext(ThemeContext)

  return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/item" element={<ContainerItem />} />
        </Routes>
        <Footer />
      </div>
)}

export default App;