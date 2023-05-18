import User from "../User/User";
import "./Users.css";

const Users = ({ newUser, onGetHistoryMsg }) => {
  return (
    <div className='users'>
      <ul className='users__list'>
        {newUser.map((each) => (
          <User
            key={each.chatId}
            each={each}
            onGetHistoryMsg={onGetHistoryMsg}
          />
        ))}
      </ul>
    </div>
  );
};

export default Users;
