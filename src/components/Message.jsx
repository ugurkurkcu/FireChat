import { auth } from "../firebase/config";

const Message = ({ m }) => {
  if (auth.currentUser?.uid === m.author.id) {
    return <p className="msg-user">{m.text}</p>;
  }
  return (
    <div className="msg-other">
      <div>
        <img src={m.author.photo} />
        <span>{m.author.name}</span>
      </div>

      <p>{m.text}</p>
    </div>
  );
};

export default Message;
