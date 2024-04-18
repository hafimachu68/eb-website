import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/contact.css';

function Cform() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="custom-form">
      <Form.Group controlId="validationCustom01">
        <Form.Label className='pt-3 nm'>Name</Form.Label>
        <Form.Control className='input' required type="text" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validationCustom02">
        <Form.Label className=' mt-3'>Email</Form.Label>
        <Form.Control className='input' required type="email" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validationCustom06">
        <Form.Label  className=' mt-3'>Name of the Company</Form.Label>
        <Form.Control className='input' required type="text" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validationCustomUsername">
        <Form.Label  className=' mt-3'>Position</Form.Label>
        <Form.Control className='input' type="text" required />
      </Form.Group>

      <Form.Group controlId="validationCustom03">
        <Form.Label  className=' mt-3'>Industry/Domain</Form.Label>
        <Form.Control className='input' type="text" />
      </Form.Group>

      <Form.Group controlId="validationCustom04">
        <Form.Label  className=' mt-3'>Number of Employees</Form.Label>
        <Form.Control  className='input' type="number" />
      </Form.Group>

      <Form.Group controlId="validationCustom05" className='my-5'>
        <Form.Control as="textarea" rows={3} placeholder="Message" required />
        <Form.Control.Feedback type="invalid">
          Please provide a Message.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Check required label="I am not a Robot" feedback="You must agree before submitting." feedbackType="invalid" />
      </Form.Group>

      <Button type="submit" className="submit-button">Submit form</Button>
    </Form>
  );
}

export default Cform;
