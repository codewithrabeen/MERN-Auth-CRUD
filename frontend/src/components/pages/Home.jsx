import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData, history]);

  const appName = "MERN Auth & CRUD App";

  return (
    <div className="container text-center mt-5">
      {userData.user ? (
        <div className="p-5 bg-light rounded shadow-lg">
          <h1 className="display-4 mb-4">
             Hello <span className="text-primary">{userData.user.displayName}</span>
          </h1>
          <h3 className="mb-4">Welcome to <span className="text-success">{appName}</span></h3>

          <div className="d-flex justify-content-center gap-3">
            <Link
            style={{marginRight:"10px"}}
              className="btn btn-primary btn-lg shadow-sm"
              to="/create"
            >
               Add Record
            </Link>
            <Link
              className="btn btn-success btn-lg shadow-sm"
              to="/details"
            >
               View Records
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-5 bg-light rounded shadow-lg">
          <h2 className="mb-4 text-danger">You are not logged in!</h2>
          <Link className="btn btn-dark btn-lg" to="/login">
            🔑 Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
