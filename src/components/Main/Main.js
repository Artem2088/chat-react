import Users from "../Users/Users";
import MessageField from "../MessageField/MessageField";
import "./Main.css";

function Main({ newUser, onGetHistoryMsg, historyMsg, onCreateMessage }) {
  return (
    <div className='main'>
      <div className='main__wrap'>
        <Users newUser={newUser} onGetHistoryMsg={onGetHistoryMsg} />
        <MessageField
          historyMsg={historyMsg}
          onCreateMessage={onCreateMessage}
        />
      </div>
    </div>
  );
}
export default Main;
