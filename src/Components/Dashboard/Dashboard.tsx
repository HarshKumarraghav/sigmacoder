import MainHeader from "../Navbar/MainHeader";
import Section1 from "./Section1";
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
            <Section1 />
          </div>
          <DataTable columns={Columns} data={allQuestions} />
          {/* <DataTableDemo /> */}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
