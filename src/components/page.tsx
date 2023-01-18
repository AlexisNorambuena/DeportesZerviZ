import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { createLogicalAnd } from 'typescript';
 

function BasicExample() {
    return (
        <div >
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" href="#/action-1">
                    Futbol

                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" >Futbol</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" >F1</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" >MLB</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default BasicExample;