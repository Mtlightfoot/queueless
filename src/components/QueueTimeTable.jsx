import Table from 'react-bootstrap/Table';

function QueueTimeTable() {
    return (
        <Table striped hover>
            <thead className='tableHeaders'>
                <tr>
                    <th><h6 className='sectionTitles'>Ride Name</h6></th>
                    <th><h6 className='sectionTitles'>Queue Time</h6></th>
                </tr>
            </thead>
            <tbody className='tableContent'>
                <tr>
                    <td>Ride</td>
                    <td>Time</td>

                </tr>
                <tr>
                    <td>Ride</td>
                    <td>Time</td>

                </tr>
                <tr>
                    <td>Ride</td>
                    <td>Time</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default QueueTimeTable;