import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Alien, Code } from "@phosphor-icons/react";

function Cabecalho(){
    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top' sticky='top'>
        <Container>
          <Navbar.Brand ><Code size={32} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Projetos">Projetos</Nav.Link>
            <Nav.Link href="/Contatos">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
        </>
        
    )   
}

export default Cabecalho