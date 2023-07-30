/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [colorCode, setColorCode] = useState("");

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      if (result.data) {
        setUsername(result.data.username);
        setColorCode("green");
      } else {
        setUsername("No user exists");
        setColorCode("red");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {error && <p id="errorMsg">{error}</p>}
      {successMessage && (
        <p id={colorCode} className="successMsg">
          {successMessage}
          <br />
          Username: {username}
        </p>
      )}
      <button onClick={handleClick}>Autenticate Token</button>
    </>
  );
}
