import Message from "../../icons/message.svg";

const Header = ({ onLogOut, avatar, onGetAllContacts }) => {
  return (
    <div className='header'>
      <div className='header__wrap'>
        <div className='header-user'>
          <img src={avatar} alt='аватар' className='header-user__avatar' />
          <button type='button' className='header-user__button'>
            <img
              src={Message}
              alt='сообщение'
              className='header-user__message'
            />
          </button>
          <button className='header__allContacts' onClick={onGetAllContacts}>
            Загрузить контакты
          </button>
        </div>
        <div className='header-newUser'>
          <div className='header-newUser__wrap'>
            <img src='' alt='аватар' className='header-newUser__avatar' />
            <span className='header-newUser__contact'>123456789</span>
          </div>
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
