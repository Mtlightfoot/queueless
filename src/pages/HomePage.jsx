import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Component imports
import QueueTimeTable from '../components/QueueTimeTable';

import API from '../utils/WaitTimeApi';
import { useState, useEffect } from 'react';

function HomePage() {

    const [input, setInput] = useState("");

    const [searchResults, setSearchResults] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => {
                setSearchResults({ ...searchResults, result: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);

    const [themeParkName, setThemeParkName] = useState("Waiting for Theme Park");

    useEffect(() => {
        setThemeParkName(themeParkName);
    }, [themeParkName]);

    function setData() {
        query(input);
    }

    function setPageData() {
        setThemeParkName(searchResults.result.name);
    }

    return (
        <Container className='pageContainer'>
            <Row>
                <Col fluid>

                    <InputGroup className='searchBoxWrapper'>
                        <Form.Control
                            className='searchBox'
                            size='lg'
                            placeholder="Enter Theme Park Name"
                            aria-label="Theme Park Name"
                            aria-describedby="basic-addon2"
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)}
                        />
                        <Button
                            onClick={() => {
                                setData();
                                setPageData();
                            }}
                            className=''
                            variant="outline-secondary"
                            id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>

                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h6 className='sectionTitles'>Theme Park</h6>
                    <p className='themeParkNameText'>{themeParkName}</p>
                </Col>
                <Col md={6}><QueueTimeTable /></Col>
            </Row>
        </Container>
    );
}

export default HomePage;