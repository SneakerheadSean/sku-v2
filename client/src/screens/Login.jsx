import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        class="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
      >
        <div class="field">
          <h3>Login</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button class="ui button" type="submit">
          <Link to="/register">Register</Link>
        </button>
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
