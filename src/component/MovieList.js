import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginations from "./Paginations";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/action/movieAction";

const MovieList = () => {
  const [movies, setMovies] = useState([])

  const dispatch = useDispatch();

    useEffect(() => {
      // Get Data By use dispatch and redux
      dispatch(getAllMovies())
    },[] )
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
      setMovies(dataMovies);
  }, [dataMovies]);


  return (
    <Row className="mt-2">
      {/* Check about movies and loop on movies to render on browser */}
      {movies.length >= 1 ? (
        // Use Filter to delete elemnt don't have m.poster_path
        movies.filter((m) => m.poster_path)
          ?.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
      ) : (
        <h2 className="text-center p-5 fs-1">لايوجد افلام ...</h2>
      )}
      {movies.length >= 1 ? (<Paginations  />) : null}
      
    </Row>
  );
};

export default MovieList;