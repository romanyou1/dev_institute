import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./userSlice";

export default function UserData() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Data</h2>
      <button onClick={() => dispatch(fetchUserData(1))}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Username: {data.username}</p>
        </div>
      )}
    </div>
  );
}