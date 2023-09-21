import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer(){
    return (
        <>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Rafael Lima © 2023
            </Navbar.Text>
          </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <br/>
        </>
        
    )   
}

export default Footer