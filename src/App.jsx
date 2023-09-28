import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Cabecalho />
      <Footer />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Contatos" element={<Contatos />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
