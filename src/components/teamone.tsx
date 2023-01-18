import Form from 'react-bootstrap/Form';
import mlb from"./page"

function CheckOne() {
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

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    
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

export default CheckOne;