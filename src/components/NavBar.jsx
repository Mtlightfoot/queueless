import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container>
                <Navbar.Brand href="#" className='navBarText'>
                    <img
                        alt=""
                        src="/loop-icon-big.png"
                        width="45"
                        height="45"
                        className="d-inline-block align-center"
                    />{' '}Queue Less</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;