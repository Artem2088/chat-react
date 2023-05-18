import { useState } from "react";
import sendImg from "../../icons/send.svg";

import "./Input.css";

const Input = ({ onCreateMessage }) => {
  const [valueInput, setValueInput] = useState("");

  const handleInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateMessage(valueInput);
  };

  return (
    <section className='input'>
      <div className='input__wrap'>
        <input
          id='inputMessage'
          type='text'
          className='input__field'
          placeholder='Введите сообщение'
          onChange={handleInput}
        />
        <button className='input__button' type='submit' onClick={handleSubmit}>
          <img src={sendImg} alt='Отправить' className='input__image' />
        </button>
      </div>
    </section>
  );
};

export default Input;
