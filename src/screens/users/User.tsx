import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <h1>
      Users with it {userId} id named:
      {users.map((user) => (user.id === Number(userId) ? user.name : null))}
    </h1>
  );
}

export default User;
