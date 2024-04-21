import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [errors, setErrors] = useState({});
  const isThereError = Object.keys(errors).length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, name, password } = Object.fromEntries(formData.entries());
    const ValidationErrors = {};
    if (!email) {
      ValidationErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(email)) {
      ValidationErrors.email = "Please enter a valid email address";
    }
    if (!name || name.trim() === "") {
      ValidationErrors.name = "Name is required";
    }
    if (!password) {
      ValidationErrors.password = "Password is required";
    } else if (password.length < 6) {
      ValidationErrors.password =
        "Password should be atleast 6 characters long";
    }
    setErrors(errors);
    if (Object.keys(ValidationErrors).length > 0) {
      return;
    }
    console.log({ email, name, password });
  };
  return (
    <>
      <div className={styles.container}>
        <Form
          onSubmit={handleSubmit}
          className={`d-flex flex-column  col-12 col-md-7 col-lg-6 p-5 ${styles.form}`}
        >
          <div className="mb-2">
            <img
              src="/src/assets/Logo.png"
              alt="Signup"
              className="img-fluid form-image"
            />
          </div>
          <h2 className="text-center mb-4">Login</h2>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            type="submit"
            className="mb-3 btn-gradient-primary"
            variant="danger"
            disabled={isThereError}
          >
            Login
          </Button>

          <small className="mt-3">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className={styles.loginLink}>
              Signup
            </Link>
          </small>
        </Form>
      </div>
    </>
  );
}
