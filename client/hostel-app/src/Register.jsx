import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "./axios";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

const Register = () => {
  const dispatch = useDispatch()
  const [register, setRegister] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post('/accounts/login/', loginData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const m = await response.data
      setLoginMessage(m.message)
      
      setTimeout(() => {
       navigate('/')
       dispatch(setUser(m.user))
      }, 1000)
    }catch(error){
       if(error.response && error.response.data){
        setLoginError(error.response.data.error)
       }else{
        setMessage('something went wrong')
       }
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/accounts/register/", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const m = await response.data
      setMessage(m.message);
      //setTimeout(() => {
      //  navigate('/auth/login')
      //}, 1000)
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setMessage("something went wrong");
      }
    }
  };

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
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="username" name="username" value={loginData.username} onChange={handleLoginChange}/>
              <input type="password" placeholder="password" name="password" value={loginData.password} onChange={handleLoginChange} />
              <p>Forgot Password?</p>
               {loginMessage && (
                <div className={styles.errors} style={{ color: "green" }}>
                  {loginMessage}
                </div>
              )}
              {loginError && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {loginError}
                </div>
              )}
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
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
              />
              {errors.username && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {errors.username[0]}
                </div>
              )}
              <input
                type="email"
                placeholder="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
              />
              {errors.email && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {errors.email[0]}
                </div>
              )}
              <input
                type="password"
                placeholder="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
              />
              {errors.password && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {errors.password[0]}
                </div>
              )}
              <input
                type="password"
                placeholder="confirm password"
                name="confirm_password"
                value={registerData.confirm_password}
                onChange={handleRegisterChange}
              />
              {errors.confirm_password && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {errors.confirm_password[0]}
                </div>
              )}
              {errors.non_field_errors && (
                <div className={styles.errors} style={{ color: "red" }}>
                  {errors.non_field_errors[0]}
                </div>
              )}
              {message && (
                <div className={styles.errors} style={{ color: "green" }}>
                  {message}
                </div>
              )}
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
