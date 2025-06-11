import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SIGN UP</h1>
      <label htmlFor="username">Username</label>
      <input
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        type="text"
        name="username"
      />

      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        type="password"
        name="password"
      />

      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
