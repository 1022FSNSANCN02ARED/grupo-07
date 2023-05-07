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
        <UsersList />
        <TotalUser />
      </div>
    );
  }
  
  export default Users;
  