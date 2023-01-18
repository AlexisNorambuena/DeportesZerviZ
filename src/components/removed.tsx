import Form from 'react-bootstrap/Form';

function Removed() {
        const arrayMLBT2=[{
            "name": "Barry Bonds"
        },
        {
            "name": "Randy Jhonson"
        },
        {
            "name": "Roger Clemens"
        },
        {
            "name": "Pete Rose"
        }]
        
        const nuevo = arrayMLBT2.map((element)=>{console.log(element.name)
        
            
        }
        
        )
  return (
    <Form>
      {arrayMLBT2.map((type) => (
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

export default Removed;