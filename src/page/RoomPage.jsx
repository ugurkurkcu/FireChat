import React from "react";

const RoomPage = ({ setIsAuth, setRoom }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value.toLowerCase();

    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-form">
      <h1>Chat Room</h1>
      <p>Choose Rooom You Want To Join</p>
      <input type="text" placeholder="ex: weekend" required />

      <button>Join Room</button>
      <button onClick={logout}>Leave</button>
    </form>
  );
};

export default RoomPage;
