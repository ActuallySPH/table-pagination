import { useState, useEffect } from 'react';
import axios from 'axios';

//Style
import './App.css';
import Table from 'react-bootstrap/Table';

//Component
import Userlist from './components/Userlist';
import Pagination from './components/Pagination';
import DropDown from './components/DropDown';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage ] = useState(3);

  const URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await axios.get(URL);
      setUsers(res.data)
      setLoading(false)
    }
    fetchUsers();
  }, [])

  const paginate = (currentPage) => {
    console.log(currentPage);
    if(currentPage === 0 | currentPage > (Math.ceil(users.length / usersPerPage))){
      
    }else{
      setCurrentPage(currentPage)
    }
  };

  const handleItemPerPageChange = (value) => {
    setUsersPerPage(value);
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container py-3">
      <Header />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <Userlist userlist={currentUsers} loading={loading}/>
        </tbody>
      </Table>
      <div className='d-flex justify-content-between'>
      <Pagination paginate={paginate} currentPage={currentPage} usersPerPage={usersPerPage} totalUsers={users.length}/>
      <DropDown handleItemPerPageChange={handleItemPerPageChange} usersPerPage={usersPerPage}/>
      </div>
    </div>

    
  );
}

export default App;
