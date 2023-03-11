import React, {useState, useEffect} from 'react'
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getPages } from "../redux/action/movieAction";


const Paginations = () => {
  // get number page from server and move beteween all pages
  const handlePageClick = (data) => {
    getPageMovie(data.selected + 1);
  };

  // bind data from server by useState to get movies and pageCout numbers by axios
  const [pageCount, setPageCount] = useState(0);

 const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount); 


 useEffect(() => {
  setPageCount(pages);
   
 }, []);
 



  // get current page
  const getPageMovie = async (page) => {
    // Get Data By use dispatch and redux
    dispatch(getPages(page));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginations