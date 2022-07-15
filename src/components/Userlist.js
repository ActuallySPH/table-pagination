export default function Userlist({ userlist, loading }) {
    if(loading){
        return <tr>
            <td>Loading...</td>
        </tr>
    }

    return (
        <>
    {userlist && userlist.map((user, index) => (
        <tr key={index}>
            <td key={user.id}>{user.id}</td>
            <td key={user.name}>{user.name}</td>
            <td key={user.username}>{user.username}</td>
            <td key={user.email}>{user.email}</td>
        </tr>
    ))}
    </>
  )
}
