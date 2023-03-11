import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from "./img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies, getMovieSearch } from "../redux/action/movieAction";


const NavBar = () => {
  const onSearch = (word) => {
    search(word);
  }
   
  const dispatch = useDispatch();

  // search movies from server by >> word <<
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies())
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          {/* xs="2" && xs="10" === 12 col bootstrap grid */}
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="h" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar