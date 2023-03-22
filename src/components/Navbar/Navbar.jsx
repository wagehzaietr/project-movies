import React from "react";
import { Navbarwrapper } from "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm, searchMovies }) => {
  return (
    <>
      <Navbarwrapper>
        <nav className="navbar navbar-expand-lg bg-light  navbar-light">
          <div className="container-fluid">
            <img src="./logo.png" alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Movies">
                      Movies
                    </a>
                  </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="search"
                  placeholder="Search for movies"
                  aria-label="Search"
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={() => searchMovies(searchTerm)}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </Navbarwrapper>
    </>
  );
};

export default Navbar;
