import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchThunk } from "../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchThunk(query));
    navigate("/results");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="col-2">
      <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
        <div className="nav-container">
          <Link to={"/"}>
            <img
              src="/logo/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-link" to={"/"}>
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={"/Library"}>
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={query}
                        onChange={handleChange}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="submit"
                        >
                          GO
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#" className="text-decoration-none">
              Cookie Policy
            </a>
            |
            <a href="#" className="text-decoration-none">
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
