import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  // Navigation functions
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    history.push("/login"); // optional: redirect to login after logout
  };

  return (
    <Nav className="auth-options d-flex align-items-center">
      {userData.user ? (
        <Button
        style={{marginRight:"10px",
            marginLeft:"10px"
        }}
          variant="outline-light"
          className="ms-2"
          onClick={logout}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={register}
          >
            Register
          </Button>
          <Button style={{marginRight:"10px",
            marginLeft:"10px"
          }}
            variant="outline-light"
            onClick={login}
          >
            Login
          </Button>
        </>
      )}
    </Nav>
  );
}

export default AuthOptions;
