import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        Users with it {userId} id named:
        {users.map((user) => (user.id === Number(userId) ? user.name : null))}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet />
    </div>
  );
}

export default User;
