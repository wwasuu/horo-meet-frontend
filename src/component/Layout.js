import React from "react";
import cn from "classnames";
import { useHistory, Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  function signout() {
    history.push("/");
  }

  console.log(location);

  return (
    <div>
      <Link to="/">
        <div className="layout__home-button">
          <img src="/logo-circle.png" alt="logo" />
        </div>
      </Link>
      <div className="navbar">
        <div
          className={cn("navbar__item", {
            "navbar__item--active": location.pathname === "/prediction",
          })}
        >
          <Link to="/prediction">
            <i
              className={cn("fal fa-star fa-lg", {
                fas: location.pathname === "/prediction",
              })}
            />
          </Link>
        </div>
        <div
          className={cn("navbar__item", {
            "navbar__item--active": location.pathname === "/calendar",
          })}
        >
          <Link to="/calendar">
            <i
              className={cn("fal fa-calendar-star fa-lg", {
                fas: location.pathname === "/calendar",
              })}
            />
          </Link>
        </div>
        <div
          className={cn("navbar__item", {
            "navbar__item--active": location.pathname === "/partner",
          })}
        >
          <Link to="/partner">
            <i
              className={cn("fal fa-handshake fa-lg", {
                fas: location.pathname === "/partner",
              })}
            />
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
