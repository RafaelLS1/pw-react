
import Home from './components/Home';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos';
import Cabecalho from './components/Cabecalho';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <Footer/>
      <Cabecalho/>
      <ul>
        <li>
          <Link to= "/"></Link>
        </li>
        <li>
          <Link to="/projetos"></Link>
        </li>
        <li>
          <Link to="/contatos"></Link>
        </li>
      </ul>
            
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/Projetos' element={<Projetos/>}/>
        </Routes>
        <Routes>
          <Route path='/Contatos' element={<Contatos/>}/>
        </Routes>
      
    
    </Router>
    
    
  );
}

export default App;
