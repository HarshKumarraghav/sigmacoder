import { useAuth } from "../Context/UserContext";

const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signout
      </button>
    </div>
  );
};

export default Dashboard;
