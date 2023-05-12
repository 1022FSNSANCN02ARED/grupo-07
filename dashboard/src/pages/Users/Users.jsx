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
        <div className="mainUsers">
        <LastUser />
        <TotalUser />
      </div>
        <div className="users">
        <UsersList />
        
        </div>
      </div>
    );
  }
  
  export default Users;
  