import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    //const { signup } = useAuth()
    //const [error, setError] = useState("")
    //const [loading, setLoading] = useState(false)
    //const history = useHistory()

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                <Form>
                    <Form.Group id="email">   
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                        ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">   
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm">   
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                        ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <br/>
                    <Button className='w-100' type="submit">Register</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? Login
        </div>
    </>
  );
}
