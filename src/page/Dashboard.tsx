import { DashboardProvider } from "@/Context/DashboardContext/DashbaordContext";
import DashboardUI from "../components/Dashboard/Dashboard";
const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardUI />
    </DashboardProvider>
  );
};

export default Dashboard;
