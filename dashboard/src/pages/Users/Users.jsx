import {
    HeaderUsers,
    LastUser,
    UsersList,
  } from "../../components/UsersComponents";
  
  function Users() {
    return (
      <div className="body">
        <HeaderUsers />
        <LastUser />
        <UsersList />
      </div>
    );
  }
  
  export default Users;
  