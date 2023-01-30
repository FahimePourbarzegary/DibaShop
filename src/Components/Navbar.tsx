import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [humbergNav, setHumbergNav] = useState<boolean>(false);
  const [dropdownCate, setDropdownCate] = useState<string>(
    "overflow-hidden max-h-0 opacity-0"
  );
  //toggle subnav
  const handleClickSubNav = () => {
    setHumbergNav(!humbergNav);
  };
  return (
    <nav className=" flex justify-between items-center flex-wrap ">
      {/*Logo section */}
      <div className=" font-vazirBold rounded-full  w-20 h-8 md:h-14 md:w-28 md:text-3xl bg-primary-300 text-dark flex justify-center items-center text-xl">
        دیبا
      </div>
      <div className="transition-all duration-300 ">
        {/*subnav dection */}
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
        }  md:max-h-screen md:opacity-100 rounded md:w-auto  duration-500 ease-in-out `}
      >
        <ul className="p-2 text-sm flex flex-col md:flex-row duration-500 md:text-lg">
          <li className="p-1 py-2 mb-2 md:mx-2  md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold md:font-medium">
            <NavLink to="/" className="w-full block ">
              صفحه اصلی
            </NavLink>
          </li>
          {/*Drop Down section */}
          <li
            className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2   transition-all font-semibold md:font-medium"
            onMouseEnter={() => {
              setDropdownCate("max-h-screen opacity-100");
            }}
            onMouseLeave={() =>
              setDropdownCate("overflow-hidden max-h-0 opacity-0")
            }
          >
            <button className="flex items-center justify-between w-full   rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto  font-semibold md:font-medium hover:text-dark">
              دسته بندی
            </button>
            <div
              className={`z-10  font-normal bg-dark divide-y divide-gray-100 rounded shadow w-44 absolute top-30 md:top-16 ${dropdownCate}  duration-500`}
            >
              <ul className="p-1 py-2 md:font-medium text-primary-200">
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
          <li className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold md:font-medium">
            <NavLink to="/" className="w-full block ">
              وبلاگ
            </NavLink>
          </li>
          <li className="p-1 py-2 mb-2 md:mx-2 md:mb-0 hover:bg-primary-200 hover:text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold md:font-medium">
            <NavLink to="/" className="w-full block ">
              درباره ما
            </NavLink>
          </li>
          <li className="p-1 py-2 mb-2 md:mx-2 md:mb-0 bg-primary-200 text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold">
            <NavLink
              to="/"
              className="w-full  
              flex justify-center items-center"
            >
              ثبت نام / ورود
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
