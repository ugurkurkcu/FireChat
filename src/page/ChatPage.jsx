import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesCol = collection(db, "messages");

    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    e.target.reset();
  };

  useEffect(() => {
    const messagesCol = collection(db, "messages");

    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(q, (snapshot) => {
      const tempMsg = [];
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      setMessages(tempMsg);
    });
  }, []);
  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Other Rooms</button>
      </header>

      <main>
        {messages.map((message, index) => (
          <Message key={index} m={message} />
        ))}
      </main>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type your message..." />

        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
