import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="mb-3">
      <Link to={`/movie/${mov.id}`}>
        <div className="card h-100 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt="movie"
          />

          <div className="card__overlay ">
            <div className="overlay__text text-center w-100 pt-2">
              <p> اسم الفيلم: {mov.title}</p>
              <p> تاريخ الاصدار : {mov.release_date} </p>
              <p> عدد المقيمين: {mov.vote_count} </p>
              <p>التقييم 8.2</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
