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
import Formulario from "./components/Formulario";

function App() {
  return (
    <BrowserRouter>
      
      <Cabecalho />

      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
