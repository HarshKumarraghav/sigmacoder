import MainHeader from "../Navbar/MainHeader";
import SheetCard from "./SheetCard";
import { DataTable } from "./Table/Data-table";
import { Columns } from "./Table/Column";
import { useDashboard } from "@/Context/DashboardContext/DashbaordContext";
const Dashboard = () => {
  const { allQuestions } = useDashboard();
  return (
    <>
      <MainHeader />
      <main className="max-w-screen-xl mx-auto md:py-6">
        <div className="flex flex-col lg:space-x-8 px-4">
          <div className="w-full">
            <SheetCard />
            <div className="w-full mt-4 px-3">
              <DataTable columns={Columns} data={allQuestions} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
