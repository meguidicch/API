
import { Link } from "react-router-dom"
import { Navbar,Container,Nav } from "react-bootstrap"
const Navuser=()=>{
    return(
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cheackpoint API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/list'>Profil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navuser