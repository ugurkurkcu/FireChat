import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "./firebase/config";
import LoginPage from "./page/LoginPage";
import RoomPage from "./page/RoomPage";
import ChatPage from "./page/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);

  return (
    <div>
      {!isAuth ? (
        <LoginPage setIsAuth={setIsAuth} />
      ) : (
        <div className="container">
          {room ? (
            <ChatPage room={room} setRoom={setRoom} />
          ) : (
            <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
