import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./PlusMinusInput.css";

function MultipleInputsExample() {
  return (
    <InputGroup className='custom-input-group'>
      <Form.Control size="sm" type='button' className='styled-btn border-0' value={"-"} />
      <Form.Control size="sm" type='number' min="0" max="999" className='text-center border-0' value={1} />
      <Form.Control size="sm" type='button' className='styled-btn border-0' value={"+"} />
    </InputGroup>
  );
}

export default MultipleInputsExample;