import MainHeader from "../Navbar/MainHeader";
import Section1 from "./Section1";
import { DataTableDemo } from "./DataTableDemo";
import Section2 from "./Section2";
const Dashboard = () => {
  return (
    <>
      <MainHeader />
      <main className="max-w-screen-xl mx-auto md:py-6">
        <div className="flex flex-col lg:space-x-8 px-4">
          <div className="w-full">
            <Section1 />
          </div>
          <Section2 />
          <DataTableDemo />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
