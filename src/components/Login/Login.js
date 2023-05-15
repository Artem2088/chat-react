import { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [id, setId] = useState();
  const [token, setToken] = useState("");

  const handleIdLogin = (e) => {
    setId(e.target.value);
  };

  const handleTokenLogin = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(id, token);
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
  };

  return (
    <div className='log-in'>
      <div className='log-in__container'></div>
      <h2 className='log-in__title'>Вход</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className='log-in__fieldset'>
          <input
            className='log-in__input'
            id='idInstance'
            type='idInstance'
            name='idInstance'
            placeholder='idInstance'
            required
            autoComplete='off'
            onChange={handleIdLogin}
          />
          <input
            className='log-in__input'
            id='apiTokenInstance'
            name='apiTokenInstance'
            type='apiTokenInstance'
            placeholder='apiTokenInstance'
            required
            autoComplete='off'
            onChange={handleTokenLogin}
          />
        </fieldset>
      </form>
      <button
        className='log-in__button_ent'
        type='button'
        onClick={handleSubmit}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
