import React from "react"
import cn from "classnames";
import { useHistory, Link } from "react-router-dom";

const Layout = ({ children }) => {
  const history = useHistory();

  function signout() {
    useHistory.push("/");
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar__item">
          <Link to="/prediction">
            <i className="fas fa-star fa-lg" />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/calendar">
            <i className="fal fa-calendar-star fa-lg" />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/partner">
            <i className="fal fa-handshake fa-lg" />
          </Link>
        </div>
        <div className="navbar__item" onClick={signout}>
          <i className="fal fa-sign-out fa-lg" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
