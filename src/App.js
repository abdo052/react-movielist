import React,{useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import MovieList from "./component/MovieList";
import MovieDetalis from "./component/MovieDetalis";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
// import { useSelector, useDispatch } from 'react-redux';


function App() {
 
 
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <MovieList/> } />
        <Route path="/movie/:id" element={<MovieDetalis />} />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
 
 