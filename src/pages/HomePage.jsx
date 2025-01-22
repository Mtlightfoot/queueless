import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// Component imports
import QueueTimeTable from '../components/QueueTimeTable';

import API from '../utils/WaitTimeApi';
import { useState, useEffect } from 'react';
// import QueueList from '../components/QueueList';

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

    function getData() {
        query(input);
        setQueueTimes(searchResults.result.liveData);
    }

    // function setQueueList() {
    //     return (
    //         <>
    //             {queueTimes.map(function (data) {
    //                 return (
    //                     <tr>
    //                         <td>{data.name}</td>
    //                     </tr>
    //                 )
    //             })}
    //         </>
    //     )
    // }

    // const [queueTimes, setQueueTimes] = useState([])

    // useEffect(() => {
    //     console.log(queueTimes);
    // }, [queueTimes]);

    return (
        <Container className='pageContainer'>
            <Row className='searchBoxRow'>

                <Col md={6}>

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
                                getData();
                            }}
                            className=''
                            variant="outline-secondary"
                            id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>

                </Col>

                <Col md={6}>
                    <h6 className='sectionTitles'>Theme Park</h6>
                    {searchResults ? (
                        <p className='themeParkNameText'>{searchResults.result.name}</p>
                    ) : (<p className='themeParkNameText'>Waiting for Theme Park</p>
                    )}
                </Col>
            </Row>

            <Row>

                <Col md={6}>

                    <Table striped hover>
                        <thead className='tableHeaders'>
                            <tr>
                                <th><h6 className='sectionTitles'>Ride Name</h6></th>
                                <th><h6 className='sectionTitles'>Queue Time</h6></th>
                            </tr>
                        </thead>
                        <tbody className='tableContent'>
                            <tr>
                                {searchResults ? (
                                    <>

                                        <td>{searchResults.result.liveData[6].name}</td>
                                        <td>{searchResults.result.liveData[6].status}</td>

                                    </>
                                ) : (
                                    <>
                                        <td>Waiting for ride</td>
                                        <td>Waiting for queue time</td>
                                    </>
                                )}
                            </tr>
                        </tbody>
                    </Table>

                </Col>

                <Col md={6}>

                    <QueueTimeTable />

                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;