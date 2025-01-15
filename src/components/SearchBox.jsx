import Form from 'react-bootstrap/Form';

function SearchBox() {
    return (
        <Form.Control className='searchBox' size="lg" type="text" placeholder="Search Theme Parks" />
    );
}

export default SearchBox;