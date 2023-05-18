import "./User.css";

const User = ({ each, onGetHistoryMsg }) => {
  return (
    <button className='user' onClick={onGetHistoryMsg} type='submit'>
      <div className='user__wrap'>
        <img src={each.avatar} alt='аватар' className='user__avatar' />
        <div className='user__info'>
          <span className='user__contact'>{each.name}</span>
        </div>
      </div>
    </button>
  );
};

export default User;
