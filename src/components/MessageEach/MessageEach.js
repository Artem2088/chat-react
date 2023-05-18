import "./MessageEach.css";

const MessageEach = ({ item }) => {
  const { outgoing } = item;
  return (
    <section className={item.type == "outgoing" ? "message" : "message-incom"}>
      <span className='message__text'>{item.textMessage || item}</span>
    </section>
  );
};

export default MessageEach;
