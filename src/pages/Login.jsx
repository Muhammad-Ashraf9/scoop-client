import { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(e.target.value) ||
      e.target.value.trim() === ""
    ) {
      setError("");
    } else {
      setError("Please enter a valid email address");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Add your login logic here
  };

  return (
    <>
      <Row className="justify-content-center mx-auto mt-5 align-items-center w-75 shadow-lg p-5">
        <div className="d-none d-md-block col-md-7 col-lg-6 form-image-container">
          <img
            src="https://via.placeholder.com/1080X720"
            alt="Login"
            className="img-fluid form-image"
          />
        </div>

        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column  col-12 col-md-7 col-lg-6"
        >
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </Form.Group>
          {error && <p className="text-danger mb-3">{error}</p>}

          <Button
            type="submit"
            className="mb-3 btn-gradient-primary"
            variant="primary"
          >
            Login
          </Button>
          <div className="text-center mb-3">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <small className="mt-3">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </small>
        </Form>
      </Row>
    </>
  );
}
