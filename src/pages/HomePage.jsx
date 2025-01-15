import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// Component imports
import SearchBox from '../components/SearchBox';
import QueueTimeTable from '../components/QueueTimeTable'

function HomePage() {
    return (
        <Container className='pageContainer'>
            <Row>
                <Col fluid>
                    <SearchBox />

                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h6 className='sectionTitles'>Theme Park</h6>
                    <p className='themeParkNameText'>Theme Park Name</p>
                </Col>
                <Col md={6}><QueueTimeTable /></Col>
            </Row>
        </Container>
    );
}

export default HomePage;