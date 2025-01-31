import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import themeParks from '../data/themeParks.json'

function DropDownMenu() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Choose Theme Park">
            {themeParks.map((themePark) => {
                return <Dropdown.Item key={themePark.id} onClick={() => {
                    console.log(themePark.slug)
                }} href="">{themePark.name}</Dropdown.Item>
            })}
        </DropdownButton>

    );
}

export default DropDownMenu