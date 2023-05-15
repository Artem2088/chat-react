import Users from "../Users/Users";
import MessageField from "../MessageField/MessageField";
import "./Main.css";

function Main({ onGetAllContacts }) {
  return (
    <div className='main'>
      <div className='main__wrap'>
        <Users onGetAllContacts={onGetAllContacts} />
        <MessageField />
      </div>
    </div>
  );
}
export default Main;
