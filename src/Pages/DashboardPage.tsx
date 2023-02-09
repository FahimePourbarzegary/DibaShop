import {
  faArrowRightFromBracket,
  faBell,
  faCartShopping,
  faGear,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import CartPage from "./CartPage";
import FavoritePage from "./FavoritePage";
import UserInfoPage from "./UserInfoPage";
function DashboardPage() {
  return (
    <Layout>
      {" "}
      <section className=" relative flex flex-col md:flex-row ">
        {/* nav link dashboard user */}
        <div className="w-full flex flex-col bg-slate-900 p-4 pr-8 md:w-60 lg:w-96">
          <NavLink
            to="/"
            className="  p-3 rounded-3xl text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-white transition-all"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span> خانه</span>
          </NavLink>
          <NavLink
            to="/Dashboard/userInfo"
            className={({ isActive }) =>
              ` bg-slate-600 p-3 rounded-3xl  text-sm flex  items-center justify-start gap-3 md:text-base font-semibold cursor-pointer transition-all w-full hover:bg-slate-600 `
            }
          >
            <FontAwesomeIcon icon={faGear} />
            <span> داشبورد</span>
          </NavLink>
          <NavLink
            to="/Dashboard/favorites"
            className={({ isActive }) =>
              ` p-3 rounded-3xl  text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-600 transition-all${
                isActive ? " bg-slate-800" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>علاقمندی ها</span>
          </NavLink>
          <NavLink
            to="/Dashboard/usercart"
            className={({ isActive }) =>
              ` p-3 rounded-3xl  text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-600 transition-all${
                isActive ? " bg-slate-800" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span> کارت</span>
          </NavLink>
          <NavLink
            to="/Dashboard/newsuser"
            className={({ isActive }) =>
              ` p-3 rounded-3xl  text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-600 transition-all${
                isActive ? " bg-slate-800" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faBell} />
            <span> اطلاعیه ها</span>
          </NavLink>
          <button
            onClick={() => {
              // logOut();
            }}
            className=" p-3 rounded-3xl  text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50 transition-all"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            خروج
          </button>
        </div>
        {/**************************************************/}
        <Routes>
          <Route path="userInfo" element={<UserInfoPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="newsuser" element={<div>newsuser</div>} />
          <Route path="usercart" element={<CartPage />} />
        </Routes>
      </section>
    </Layout>
  );
}

export default DashboardPage;
