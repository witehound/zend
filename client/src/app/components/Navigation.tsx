import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Navigation() {
  return (
    <main className=" w-[156px] flex items-center flex-col p-5 gap-5">
      <HomeIcon />
      <AnalyticsIcon />
      <FolderZipIcon />
      <SettingsIcon />
    </main>
  );
}
