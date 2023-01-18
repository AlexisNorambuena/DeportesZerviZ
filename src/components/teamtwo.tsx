import Form from 'react-bootstrap/Form';

function CheckTwo() {
    const arrayMLBT1=[{
        "name": "Miguel Cabrera"
    },
    {
        "name": "Albert Pujols"
    },
    {
        "name": "Derek Jeter"
    },
    {
        "name": "Alex Rodriguez"
    }]
  return (
    
    <Form>
      {arrayMLBT1.map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            
            id={`default-${type}`}
            label={`${type.name}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckTwo;