"use client";
import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import ThemeDropdown from "./theme-switcher/theme-switcher";
import Link from "next/link";
import SearchField from "./search-field/search-field";

const Navbar = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleThemeDropdown = () => {
    setIsThemeOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="navbar">
      <Link href={"/product"} className="logo">
        <div className="shape"></div>
        <svg
          width="106"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 170 25.16"
          fill="var(--header--zoomit-typography)"
        >
          <g>
            <g>
              <path
                fill="#E4002B"
                d="M13.49,0H43.17a0,0,0,0,1,0,0L28.94,16H21.62a0,0,0,0,1,0,0L30.9,5.56a0,0,0,0,0,0,0H8.58L13.47,0h0"
              ></path>
              <polygon
                fill="#E4002B"
                points="29.71 25.16 0 25.16 14.25 9.16 21.6 9.16 12.27 19.62 34.62 19.62 29.71 25.16"
              ></polygon>
              <polygon points="62.27 6.16 49.64 6.16 52.78 2.66 70.47 2.66 56.3 19 69.47 19 67.19 22.5 48.1 22.5 62.27 6.16"></polygon>
              <path d="M77.7,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49a5.62,5.62,0,0,1,1.71-4.12A5.62,5.62,0,0,1,77.7,2.66h8.17A5.62,5.62,0,0,1,90,4.37,5.62,5.62,0,0,1,91.7,8.49v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,77.7,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33H77.7a2.33,2.33,0,0,0-2.33,2.33Z"></path>
              <path d="M101.17,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49A5.62,5.62,0,0,1,97,4.37a5.62,5.62,0,0,1,4.12-1.71h8.17a5.62,5.62,0,0,1,4.12,1.71,5.62,5.62,0,0,1,1.71,4.12v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,101.17,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33h-8.17a2.33,2.33,0,0,0-2.33,2.33Z"></path>
              <rect x="143.52" y="2.66" width="3.5" height="19.83"></rect>
              <polygon points="161.83 6.16 161.83 22.5 158.33 22.5 158.33 6.16 150.16 6.16 150.16 2.66 170 2.66 170 6.16 161.83 6.16"></polygon>
              <polygon points="136.21 2.66 129.32 9.35 122.44 2.66 118.82 2.66 118.82 22.5 122.32 22.5 122.32 7.19 129.32 13.83 136.32 7.19 136.32 22.5 139.82 22.5 139.82 2.66 136.21 2.66"></polygon>
            </g>
          </g>
        </svg>
      </Link>
      <div className="nav-menu">
        <div className="nav-item gklMsb flex">
          <i className="bx  bx-cup-hot"></i>
          <div className="title">زومیت من</div>
        </div>
        <div className="nav-item dropdown flex">
          <i className="bx  bx-menu-wide"></i>
          <div className="title">
            دسته بندی محصولات
            <ul className="drop-menu">
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-mobile"></i>
                  گوشی و تبلت
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-laptop-alt"></i>
                  لپ تاپ و کامپیوتر
                  <ul className="side-menu">
                    <li className="sidedrop-item">4</li>
                    <li className="sidedrop-item">5</li>
                    <li className="sidedrop-item">6</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-tv"></i>
                  لوازم خانگی
                  <ul className="side-menu">
                    <li className="sidedrop-item">7</li>
                    <li className="sidedrop-item">8</li>
                    <li className="sidedrop-item">9</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-wrist-watch-round"></i>
                  ساعت هوشمند و دست‌بند سلامتی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-gaming"></i>
                  کنسول و تجهیزات بازی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-keyboard"></i>
                  قطعات کامپیوتر و لوازم جانبی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-headphone-alt"></i>
                  هدفون، اسپیکر و تجهیزات صوتی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-camera-alt"></i>
                  دوربین و تجهیزات عکاسی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-server"></i>
                  مودم و تجهیزات شبکه
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-printer"></i>
                  ماشین های اداری
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-dots-horizontal-rounded"></i>
                  سایر
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-item hidden xl:block md:block lg:block">
          <div className="title">مقایسه کن</div>
        </div>
        <div className="nav-item hidden lg:flex xl:flex">
          <div className="title">راهنمای خرید</div>
        </div>
        <div className="nav-item hidden lg:flex xl:flex">
          <div className="title">بررسی</div>
        </div>
        <div className="nav-item hidden xl:flex">
          <div className="title">فروشگاه ها</div>
        </div>
        <div className="nav-item dropdown hidden xl:flex">
          <i className="bx  bx-plus"></i>
          <div className="title">
            زومیت
            <ul className="drop-menu">
              <li className="dropdown-item">مجله زومیت</li>
              <li className="dropdown-item">تبلیغات</li>
              <li className="dropdown-item">فرصت های شغلی</li>
              <li className="dropdown-item">درباره ما</li>
              <li className="dropdown-item">تماس با ما</li>
            </ul>
          </div>
        </div>
        <SearchField />
      </div>
      <div className="profile">
        <ThemeDropdown />
        <Link href={"/login"}>
          <i className="bx bx-user-circle bx-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
