     // get all movies by axios >> data >> is a Object from api
    const getAllMovie = async ()=> {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a8b147110f5aa06e4e10f4cd40c5e56b&language=ar")

    //api.themoviedb.org/3/movie/550?api_key=a8b147110f5aa06e4e10f4cd40c5e56b&language=en-US

    // to know parent object should use >> console.log(res) <<
    // console.log(res)
    https: setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  } 




  
  // search movies from server by >> word <<
    const search= async (word)=>{
    if(word === "" ) {
      // getAllMovie();
    } else{ 
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8b147110f5aa06e4e10f4cd40c5e56b&&query=${word}&a8b147110f5aa06e4e10f4cd40c5e56b&language=ar`)
    
    // setMovies(res.data.results);
    setPageCount(res.data.total_pages);
    }
  }
 

  // get current page 
    const getPage = async (page)=> {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a8b147110f5aa06e4e10f4cd40c5e56b&language=ar&page=${page}`)
    
    // setMovies(res.data.results); 
    setPageCount(res.data.total_pages);
  }