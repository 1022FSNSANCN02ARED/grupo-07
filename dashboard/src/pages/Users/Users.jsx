import {
    HeaderUsers,
    LastUser,
    UsersList,
    TotalUser,
  } from "../../components/UsersComponents";
  
  function Users() {
    return (
      <div className="body">
        <HeaderUsers />
        <LastUser />
        <div className="users">
        <UsersList />
        <TotalUser />
        </div>
      </div>
    );
  }
  
  export default Users;
  