import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import 'boxicons';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import useTheme from "../../hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Loading";

const navBar = [
  {
    title: 'Home',
    path: '/', 
  },
  {
    title: 'Tool',
    path: '/Product/Search',
  }
  ,{
    title:'History',
    path: '/Event',
  }
  
  
]

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleThemeSwitch } = useTheme();
  const {pathname} = useLocation();

  return (
   <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/logo-anna.svg" alt="" className="header__logo__img" />
        </Link>
      </div>
      <div className="header__wrapper">
        <div className="header__nav ">
          {
            navBar && navBar.map((item,index)=>{
              return(
                <Link key={`header${index}`} to={`${item.path}`} className={`header__nav__item header--hover ${pathname == item.path ? 'active' : ''}`}>
                {
                  item.title
                }
              </Link>
              
              )
            })
          }
         
         
        </div>
        <div className="header__user">
          <div className="header__user__item">
          <i className='bx bx-user header--hover'></i>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Header;
