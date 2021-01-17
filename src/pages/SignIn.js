import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/styles.css";
import { BsEyeSlash, BsEye } from "react-icons/all";
import { Toast } from "react-bootstrap";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("users")) {
      setMsg("Please Sign Up first.");
      setShow(true);
      return;
    }
    let flag = false;
    let users = JSON.parse(localStorage.getItem("users"));

    users.forEach((user) => {
      if (user.email === email) {
        flag = true;
        if (user.password === password) history.replace("/");
        else {
          setMsg("Incorrect password. Please try again.");
          setShow(true);
        }
      }
      return true;
    });
    if (!flag) {
      setMsg("Please Sign Up first.");
      setShow(true);
    }
  };

  return (
    <div className="signin">
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast
          delay={2000}
          autohide
          show={show}
          onClose={() => {
            setShow(!show);
          }}
        >
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      </div>

      <div className="container">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
          <div className="card bg-dark p-5 text-center">
            <h2 className="my-3 text-white">SIGN IN</h2>
            <form onSubmit={handleSubmit}>
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

              <p
                className="link text-right pr-2 mb-0 text-white-50"
                onClick={() => {
                  //   history.push("/forgot-password");
                }}
              >
                Forgot Password?
              </p>

              <div className="form-group form-check mt-0 text-justify">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  onChange={() => {
                    setCheck(!check);
                  }}
                  checked={check}
                />
                <label
                  className="form-check-label text-white-50"
                  htmlFor="check"
                >
                  Remember Me
                </label>
              </div>

              <button type="submit" className="btn btn-light mb-2">
                SIGN IN
              </button>
              <p
                className="link text-white-50"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Don't have an account? SignUp
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
