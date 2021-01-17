import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/styles.css";
import { BsEyeSlash, BsEye } from "react-icons/all";
import { v4 as uuidv4 } from "uuid";

function SignUp() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = [];
    if (localStorage.getItem("users"))
      users = JSON.parse(localStorage.getItem("users"));
    users.push({
      id: uuidv4(),
      username: username,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(users));

    history.push("/signin");
  };
  return (
    <div className="signin">
      <div className="container">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
          <div className="card bg-dark p-5 text-center">
            <h2 className="my-3 text-white">SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                className="form-control my-3"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
              <input
                type="email"
                value={email}
                className="form-control my-3"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <div className="input-group my-3 bg-white">
                <input
                  type={visible ? "text" : "password"}
                  value={password}
                  className="form-control border-right-0"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  aria-describedby="basic-addon2"
                />
                <div
                  className="input-group-append"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  <span
                    className="input-group-text bg-transparent border-left-0"
                    id="basic-addon2"
                  >
                    {visible ? <BsEye /> : <BsEyeSlash />}
                  </span>
                </div>
              </div>

              <div className="form-group form-check my-3 text-justify">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  onChange={() => {
                    setCheck(!check);
                  }}
                  checked={check}
                  required
                />
                <label
                  className="form-check-label text-white-50"
                  htmlFor="check"
                >
                  I accept the T&Cs
                </label>
              </div>

              <button type="submit" className="btn btn-light mb-2">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
