import React,{useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";




const MovieDetalis = () => {

  // we use useParams to acceces id for every movie and show data
  const param = useParams();
  const [movie, setMovie] = useState([])
  console.log(param.id);

  // get movies by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=a8b147110f5aa06e4e10f4cd40c5e56b&language=ar`);

    setMovie(res.data);    
  };

  useEffect(() => {
      getMovieDetails();
  }, )

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" sm="12" xs="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              className="img-movie w-30 "
              alt="ascad"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12" sm="12" xs="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة</p>
            </div>
            <div className="text-end px-4">
              <p className="card-text-story"> {movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="12"
          sm="12"
          xs="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              className="btn btn-primary mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}
            >
              عودة للرئيسية
            </button>
          </Link>
          {/* 
          x - for classes that set both *-left and *-right
          y - for classes that set both *-top and *-bottom 
        */}
          <a href={movie.homepage}>
            <button
              className="btn btn-primary mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetalis



