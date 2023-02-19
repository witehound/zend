import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./Pages";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/">
            <img src={Logo} alt="logo" className=" w-28 object-contain" />
          </Link>
          <Link
            to="/createpost"
            className=" font-inter font-medium bg-[#6469ff] text-white py-2 px-4 rounded-md"
          >
            Create
          </Link>
        </header>
        <main className=" sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
