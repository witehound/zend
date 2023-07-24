import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Navigation() {
  return (
    <div className="h-screen border-r border-gray-600 top-0 sticky left-0">
      <main className=" w-[126px] flex items-center flex-col pt-5 gap-5">
        <div className="p-2 rounded-full cursor-pointer hover:bg-[#181818]">
          <HomeIcon />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-[#181818]">
          <AnalyticsIcon />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-[#181818]">
          <FolderZipIcon />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-[#181818]">
          <SettingsIcon />
        </div>
      </main>
    </div>
  );
}
