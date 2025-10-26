import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/auth/register");
    setRegister(true);
  };

  const navigateToLogin = () => {
    navigate("/auth/login");
    setRegister(false);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.container}>
        <div className={styles.division1}>
          <div className={styles.division1_2}>
            <div>
              <h1>Welcome To Naivas</h1>
              <p>Don't have an account?</p>
            </div>
            <div className={styles.lastDiv}>
              <button
                onClick={() => {
                  navigateToRegister();
                }}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
        <div className={styles.division2}>
          <div
            className={`${styles.div22} ${
              register ? styles.none : styles.block
            }`}
          >
            <h1>LogIn</h1>
            <div className={styles.buttonDiv}>
              <button
                onClick={() => {
                  navigateToLogin();
                }}
              >
                LogIn
              </button>
              <button
                onClick={() => {
                  navigateToRegister();
                }}
              >
                SignUp
              </button>
            </div>
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <p>Forgot Password?</p>
              <button type="submit">LogIn</button>
            </form>
          </div>

          <div
            className={`${styles.div22r} ${
              register ? styles.block : styles.none
            }`}
          >
            <h1>Register</h1>
            <div className={styles.buttonDiv}>
              <button
                onClick={() => {
                  navigateToLogin();
                }}
              >
                LogIn
              </button>
              <button
                onClick={() => {
                  navigateToRegister();
                }}
              >
                SignUp
              </button>
            </div>
            <form>
              <input type="text" placeholder="username" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
