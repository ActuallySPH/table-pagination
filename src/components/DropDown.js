export default function DropDown({usersPerPage, handleItemPerPageChange}) {

  return (
      <select 
            id="usersperpage" 
            value={usersPerPage} 
            onChange={(e) => handleItemPerPageChange(e.target.value)}
            >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
  )
}
