/* eslint-disable react/prop-types */
import { useState } from "react";
export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      setUser(true);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit} id="signUpForm">
        <label>
          Username:{" "}
          <input
            type="username"
            value={username}
            minLength={6}
            placeholder="min. 6 characters"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            minLength={6}
            placeholder="min. 6 characters"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
      {user && username.length >= 6 && password.length >= 6 && (
        <p>User has been created!</p>
      )}
    </>
  );
}
