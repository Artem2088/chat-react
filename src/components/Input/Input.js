import sendImg from "../../icons/send.svg";

import "./Input.css";

const Input = () => {
  return (
    <section className='input'>
      <div className='input__wrap'>
        <input
          type='text'
          className='input__field'
          placeholder='Введите сообщение'
        />
        <button className='input__button' type='submit'>
          <img src={sendImg} alt='Отправить' className='input__image' />
        </button>
      </div>
    </section>
  );
};

export default Input;
