import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1 rem" }}>
      <h2> {isSignUp ? "Sign Up" : "Sign In"} </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLFormElement>) =>
            setEmail(e.target.value)
          }
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLFormElement>) =>
            setPassword(e.target.value)
          }
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", marginBottom: "0.5rem" }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <button
        onClick={() => {
          setIsSignUp(!isSignUp);
        }}
        style={{ padding: "0.5rem 1rem" }}
      >
        {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
    </div>
  );
}
