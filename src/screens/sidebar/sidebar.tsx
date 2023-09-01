"use client"
import Image from "next/image";
import Logo from "../../assets/images/sidebar/logo.svg";
import RadioButtonChecked from "../../assets/images/sidebar/RadioButtonChecked.svg";
import Home from "../../assets/images/sidebar/home.svg";
import Round from "../../assets/images/sidebar/Round.svg";
import WhiteRound from "../../assets/images/sidebar/white-Round.svg";
import Email from "../../assets/images/sidebar/email.svg";
import Chat from "../../assets/images/sidebar/chat.svg";
import Calendar from "../../assets/images/sidebar/calendar.svg";
import Invoice from "../../assets/images/sidebar/invoice.svg";
import User from "../../assets/images/sidebar/user.svg";
import Role from "../../assets/images/sidebar/role-permission.svg";
import Pages from "../../assets/images/sidebar/pages.svg";
import Dialog from "../../assets/images/sidebar/dialog.svg";
import Typography from "../../assets/images/sidebar/typography.svg";
import Icons from "../../assets/images/sidebar/star.svg";
import Cards from "../../assets/images/sidebar/cards.svg";
import Components from "../../assets/images/sidebar/components.svg";
import RightArrow from "../../assets/images/sidebar/right_arrow.svg";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    
    <div className="sidebar">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed  top-0 left-0 z-40 w-64 h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full px-1 py-4 ">
          <ul className="space-y-1 text-sm font-sans">
            <li>
              <a href="#" className="flex items-center p-2 ">
                <Image src={Logo} alt={""} />
                <span className="ml-3">MATERIO</span>
                <Image src={RadioButtonChecked} alt={""} className="mx-16" />
              </a>
            </li>
            <li>
              <select className="dropdown_home">
                <option>Dashboards</option>
                <option>CRM</option>
                <option>Analytics</option>
                <option>eCommerce</option>
              </select>
            </li>
            <li>
              <a href="" className="flex mt-5">
                <Image src={Round} alt={""} />
                &nbsp;&nbsp;&nbsp; CRM
              </a>
            </li>
            <li>
              <a href="" className="flex white-round mt-5">
                <Image src={WhiteRound} alt={""} />
                &nbsp;&nbsp;&nbsp; Analytics
              </a>
            </li>
            <li>
              <a href="" className="flex mt-5">
                <Image src={Round} alt={""} />
                &nbsp;&nbsp;&nbsp; eCommerce
              </a>
            </li>
            <br />
            <div className="line">
              <span>------</span>
              <span>APPS & PAGES</span>
              <span>-----------------------</span>
            </div>

            <li>
              <a className="flex items-center p-2 text-color">
                <Image src={Email} alt={""} className="w-5" />
              <Link   className="flex-1 ml-3 whitespace-nowrap" href="/email">Email</Link>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Chat} alt={""} className="w-5" />
                <Link className="flex-1 ml-3 whitespace-nowrap" href="/chat">Chat</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-color dropdown_home"
              >
                <Image src={Calendar} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">Calender</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Invoice} alt={""} className="w-5" />
                <Link className="flex-1 ml-3 whitespace-nowrap" href="/invoice">Invoice</Link>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={User} alt={""} className="w-5" />
                <Link className="flex-1 ml-3 whitespace-nowrap" href="/user">User</Link>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Role} alt={""} className="w-5" />
                <Link className="flex-1 ml-3 whitespace-nowrap" href="/role">
                  Roles
                </Link>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Pages} alt={""} className="w-5" />
                <Link className="flex-1 ml-3 whitespace-nowrap" href="/permission">Permission</Link>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Dialog} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Dialog Examples
                </span>
              </a>
            </li>
            <br />
            <div className="line">
              <span>------</span>
              <span>USER INTERFACE</span>
              <span>-----------------------</span>
            </div>

            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Typography} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Typography
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Icons} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">Icons</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-">
                <Image src={Cards} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">Cards</span>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-color">
                <Image src={Components} alt={""} className="w-5" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Components
                </span>
                <Image src={RightArrow} alt={""} className="w-5" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
