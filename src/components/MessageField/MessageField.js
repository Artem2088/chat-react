import Input from "../Input/Input";
import MessageEach from "../MessageEach/MessageEach";
import "./MessageField.css";

const MessageField = ({ historyMsg, onCreateMessage }) => {
  return (
    <div className='messageField'>
      <ul className='messagefield__wrap'>
        {historyMsg.map((item) => (
          <MessageEach key={item.idMessage} item={item} />
        ))}
      </ul>
      <Input onCreateMessage={onCreateMessage} />
    </div>
  );
};

export default MessageField;
