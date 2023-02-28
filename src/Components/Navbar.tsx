import {
  faBars,
  faBell,
  faFilter,
  faGear,
  faHeart,
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../services/store";
export const Navbar = () => {
  const [humbergNav, setHumbergNav] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(" ");
  const [dropdownCate, setDropdownCate] = useState<string>(
    "overflow-hidden max-h-0 opacity-0"
  );
  const { user, loggedIn, error } = useAppSelector(
    (state: RootState) => state.users
  );
  const [isUser, setIsUser] = useState<boolean>(false);
  //toggle subnav
  const handleClickSubNav = () => {
    setHumbergNav(!humbergNav);
  };
  useEffect(() => {
    if (loggedIn) setIsUser(true);
    else setIsUser(false);
  }, [user]);

  return (
    <nav className=" flex justify-between items-center flex-wrap ">
      {/*Logo section */}
      <div className=" font-vazirBold rounded-full  w-20 h-8   bg-primary-300 text-dark flex justify-center items-center text-xl">
        دیبا
      </div>
      {/* SearchBar section */}
      <div className=" w-full lg:w-1/4 border  flex justify-between px-6 py-1 rounded-2xl items-center  col-span-2  order-2 lg:order-1 md:col-span-2 md:rounded-3xl self-center md:mt-0 ">
        <Link to={`/Filter/${searchValue}`}>
          {" "}
          <FontAwesomeIcon icon={faFilter} className="cursor-pointer " />
        </Link>
        <input
          type="search"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.trim())}
          className=" w-full  px-3 text-xs py-3 bg-dark focus:outline-none"
          placeholder="چیزی را جستجو کنید..."
        />
        <Link to={`/Filter/${searchValue}`}>
          {" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/*subnav dection */}
      <div className="transition-all duration-300 ">
        <button
          className=" hover:opacity-50 transition-all duration-300 border border-primary-200 rounded-lg flex justify-center items-center md:hidden "
          onClick={handleClickSubNav}
        >
          <FontAwesomeIcon icon={faBars} className="p-2" />
        </button>
      </div>
      {/* LinksNav section */}
      <div
        className={`w-full my-4 md:my-0 sm:${
          humbergNav
            ? " max-h-screen opacity-100"
            : " overflow-hidden max-h-0 opacity-0"
        }  md:max-h-screen md:opacity-100 rounded md:w-auto  duration-500 ease-in-out order-1 lg:order-2 `}
      >
        <ul className="p-2 text-sm flex flex-col md:flex-row duration-500">
          <li className="p-1 py-2 mb-2 md:mx-2  md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all text-sm">
            <NavLink to="/" className="w-full block ">
              صفحه اصلی
            </NavLink>
          </li>
          {/*Drop Down section */}
          <li
            className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2   transition-all text-sm"
            onMouseEnter={() => {
              setDropdownCate("max-h-screen opacity-100");
            }}
            onMouseLeave={() =>
              setDropdownCate("overflow-hidden max-h-0 opacity-0")
            }
          >
            <button className="flex items-center justify-between w-full   rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto   hover:text-dark text-sm">
              دسته بندی
            </button>
            <div
              className={`z-10  font-normal bg-dark divide-y divide-gray-100 rounded shadow w-44 absolute top-30 md:top-16 ${dropdownCate}  duration-500`}
            >
              <ul className="p-1 py-2  text-primary-200">
                <li className="block px-4 py-2 rounded  hover:bg-primary-200 hover:text-dark ">
                  <NavLink to="/" className="w-full block">
                    گردنبند
                  </NavLink>
                </li>
                <li className="block px-4 py-2  rounded  hover:bg-primary-200 hover:text-dark ">
                  <NavLink to="/" className="w-full block">
                    گوشواره
                  </NavLink>
                </li>
                <li className="block px-4 py-2  rounded  hover:bg-primary-200 hover:text-dark ">
                  <NavLink to="/" className="w-full block">
                    ست
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all  text-sm">
            <NavLink to="/blogs" className="w-full block ">
              وبلاگ
            </NavLink>
          </li>
          <li className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all text-sm ">
            <NavLink to="/AboutUs" className="w-full block ">
              درباره ما
            </NavLink>
          </li>
          <li>
            {/* login register section*/}
            <div
              className="order-1 md:order-2  items-center flex w-full justify-end
       md:items-center md:justify-evenly h-full"
            >
              {user ? (
                <div className="flex w-full justify-between gap-3">
                  <Link to="/Dashboard/newsuser">
                    <div className=" w-7 h-7 rounded-full  flex items-center justify-center  border-2  border-solid md:visible relative">
                      <FontAwesomeIcon icon={faBell} />
                      <div className=" w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 "></div>
                    </div>
                  </Link>
                  <Link to="/Dashboard/favorites">
                    <div className="w-7 h-7 rounded-full  flex items-center justify-center border-2  border-solid md:visible relative">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </Link>
                  <Link to="/Dashboard/usercart">
                    <div className="w-7 h-7 rounded-full  flex items-center justify-center border-2  border-solid md:visible relative">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                  </Link>
                  <Link to="/Dashboard/userInfo">
                    <div className=" w-7 h-7 rounded-full">
                      <img
                        src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Aneka"
                        alt="user-image"
                        aria-hidden
                        className=" w-full h-7 h-autoshadow rounded-full max-w-ful align-middle border-none object-cover object-fit "
                      />
                    </div>{" "}
                  </Link>
                </div>
              ) : (
                <NavLink
                  to="/Register"
                  className="w-full  
              flex justify-center items-center  p-1 py-2  md:mx-2 md:mb-0 bg-primary-200 text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold text-sm"
                >
                  ثبت نام / ورود
                </NavLink>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
