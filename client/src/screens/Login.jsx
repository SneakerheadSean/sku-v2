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
<form class="ui form"  onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}
      >
  <div class="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name"/>
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name"/>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}
      >
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
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
      </label>
      <br />
      <Link to="/register">Register</Link>
      <button>Submit</button>
    </form>
          </>
  );
}
