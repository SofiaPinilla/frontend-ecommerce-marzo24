import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      Header
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
