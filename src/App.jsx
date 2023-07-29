import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
