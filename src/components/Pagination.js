export default function Pagination({usersPerPage, totalUsers, paginate, currentPage}) {
    const pageNumber = [];

    
    for (let index = 1; index <= Math.ceil(totalUsers / usersPerPage); index++) {
        pageNumber.push(index)
    }

    return (
    <nav>
    <ul className="pagination"> 
        <li>
            <button onClick={() => paginate(currentPage - 1)} className="page-link" >Previous</button>
        </li>
        {pageNumber.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`} >
                <button onClick={() => paginate(number)} className="page-link">
                    {number}
                </button>
            </li>    
        ))}
        <li>
            <button onClick={() => paginate(currentPage + 1)} className="page-link">Next</button>
        </li>
    </ul>
    </nav>
  )
}
