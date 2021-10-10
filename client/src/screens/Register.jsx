import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
          props.handleRegister(formData);
        }}
      >
        <div class="field">
          <h3>Register</h3>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="field">
          <label>
            UserName:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
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
          Submit
        </button>
      </form>
      </>
  );
}
