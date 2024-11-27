import Sidebar from "@/components/Sidebar/Sidebar";
import DBForm from "@/components/DBForm";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-1/6">
         <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 h-full flex items-center justify-center">
        <DBForm />
      </div>
    </div>
  );
}