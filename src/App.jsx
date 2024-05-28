import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/profile" element={ <Profile />}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
