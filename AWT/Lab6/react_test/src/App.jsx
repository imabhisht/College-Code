import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";

function App() {
  const name = "Abhisht"

  const LoginAuth = () => {
    const isLoggedIn = true;
    return (
      <div>
        <h1>Login</h1>
        {isLoggedIn ? <p>Welcome Back</p> : <p>Please Login</p>}
        <Home />
      </div>
    );
  }

  const Image_Element = () => <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />;
  return (
    <div className="custom">
      {name}
      <Image_Element />
      <LoginAuth />
    </div>
  );
}

export default App;
