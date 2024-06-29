import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);
      localStorage.setItem("token", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="login">
        <h1>Chat Room</h1>
        <p>Login to continue</p>
        <button onClick={handleLogin}>
          <img src="/logo-google.png" alt="" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
