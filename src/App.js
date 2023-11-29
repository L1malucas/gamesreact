import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Cadastro from "./pages/cadastro/cadastro.jsx";
import CatalogGames from "./pages/catalogGames/catalogGames.jsx";
import CatalogPlatform from "./pages/catalogPlatform/catalogPlatform.jsx";
import Login from "./pages/login/login.jsx";
import MyProfile from "./pages/myprofile/myprofile.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/catalogGames" component={CatalogGames} />
            <Route path="/catalogPlatform" component={CatalogPlatform} />
            <Route path="/login" component={Login} />
            <Route path="/myprofile" component={MyProfile} />
          </Routes>
        </header>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
