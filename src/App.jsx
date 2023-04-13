import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import News from "./components/News";
import Post from "./components/Post";
import Joiners from "./components/Joiners";
import Notifications from "./components/Notifications";
import Birthdays from "./components/Birthdays";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
          className={`font-Mont grid ${!open ? "grid-rows-Ropen grid-cols-1 md:grid-cols-close" : "grid-rows-3 grid-cols-1 md:grid-cols-open"
            } md:grid-rows-1 transition duration-700 overflow-x-hidden`}
        >
    <SideBar open={open} setOpen={setOpen}>
      <Routes>
          <Route path="/Feed" element="" />
      </Routes>
    </SideBar>
    <div className="px-5">
      <News />
      <Post />
    </div>
    <div className="pt-5 md:pt-7 px-2">
      <Joiners />
      <Notifications />
      <Birthdays />
    </div>
    </div>
  );
}

export default App;
