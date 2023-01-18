import Button from 'react-bootstrap/Button';

function Acciones() {
    return (
        <div>
            <div>
                <Button variant="outline-light"> ↖ to one </Button>{' '}
            </div>
            <div>
                <Button variant="outline-light"> to two ↗ </Button>{' '}
            </div>
            <br />
            <div>
                <Button variant="outline-primary">Removed Selected Players</Button>{' '}
            </div>
        </div>

    );
}

export default Acciones;