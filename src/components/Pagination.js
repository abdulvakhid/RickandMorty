
import ReactPaginate from 'react-paginate';

export const Pagination = ({totalpage,activePage, setActivePage}) => {
  return <ReactPaginate className='pagination justify-content-center my-5 gap-2'
  forcePage={activePage === 1 ? 0 : activePage - 1}
   pageCount={totalpage} 
  previousLabel="prev"
  nextLabel="next"
  previousLinkClassName='btn btn-success'
  nextLinkClassName='btn btn-success'
  pageClassName='page-item'
  pageLinkClassName='page-link text-decoration-none'
  activeClassName='active'
  onPageChange={(data) => {
    setActivePage(data.selected + 1)
   }}
  />
 
}
