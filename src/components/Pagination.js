export default function Pagination({usersPerPage, totalUsers, paginate, currentPage}) {
    const pageNumber = [];

    
    for (let index = 1; index <= Math.ceil(totalUsers / usersPerPage); index++) {
        pageNumber.push(index)
    }

    return (
    <nav>
    <ul className="pagination"> 
        <li>
            <a onClick={() => paginate(currentPage - 1)} href="/" className="page-link" >Previous</a>
        </li>
        {pageNumber.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`} >
                <a onClick={() => paginate(number)} href="/" className="page-link">
                    {number}
                </a>
            </li>    
        ))}
        <li>
            <a onClick={() => paginate(currentPage + 1)} href="/" className="page-link">Next</a>
        </li>
    </ul>
    </nav>
  )
}
