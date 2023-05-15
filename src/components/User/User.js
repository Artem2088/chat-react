import "./User.css";

const User = ({ item }) => {
  return (
    <div className='user'>
      <div className='user__wrap'>
        <img src='' alt='аватар' className='user__avatar' />
        <div className='user__info'>
          <span className='user__contact'>{item.name}</span>
          <span className='user__message'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            libero ex voluptas vero nam. Eligendi deleniti culpa illum debitis,
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
