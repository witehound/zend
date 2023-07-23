import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Navigation() {
  return (
    <div className="h-screen border-r border-gray-600">
      <main className=" w-[126px] flex items-center flex-col pt-5 gap-10">
        <HomeIcon />
        <AnalyticsIcon />
        <FolderZipIcon />
        <SettingsIcon />
      </main>
    </div>
  );
}
