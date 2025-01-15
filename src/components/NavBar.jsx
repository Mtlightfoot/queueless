import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container>
                <Navbar.Brand href="#" className='navBarText'>Queue Less</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;