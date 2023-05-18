import { useState } from "react";
import Message from "../../icons/message.svg";
import sendImg from "../../icons/send.svg";

const Header = ({ onLogOut, avatar, onCreateUser }) => {
  const [activ, setIsActiv] = useState(false);
  const [number, setNumber] = useState();

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const visibleInput = () => {
    setIsActiv(true);
  };

  const handleSendNumber = (e) => {
    e.preventDefault();
    onCreateUser(number);
    setIsActiv(false);
  };

  return (
    <div className='header'>
      <div className='header__wrap'>
        <div className='header-user'>
          <div className='header-user__container-info'>
            <img src={avatar} alt='аватар' className='header-user__avatar' />
            <button
              type='button'
              className='header-user__button'
              onClick={visibleInput}
            >
              <img
                src={Message}
                alt='сообщение'
                className='header-user__message'
              />
            </button>
          </div>
          <div
            className={
              activ
                ? "header-user__container-input_activ"
                : "header-user__container-input"
            }
          >
            <input
              id='inputNewUser'
              type='text'
              placeholder='Введите номер собеседника'
              className='header-user__input'
              onChange={handleNumber}
            />
            <button
              className='input__button'
              type='submit'
              onClick={handleSendNumber}
            >
              <img src={sendImg} alt='Отправить' className='input__image' />
            </button>
          </div>
        </div>
        <div className='header-newUser'>
          <div className='header-newUser__wrap'></div>
          <button
            type='button'
            className='header-newUser__login'
            onClick={onLogOut}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
