"use client"
import "../../app/globals.css";
import Image from "next/image";
import search from "../../assets/images/header/search.svg";
import bell from "../../assets/images/header/bell.svg";
import flag from "../../assets/images/header/flag.svg";
import moon from "../../assets/images/header/moon.svg";
import profile from "../../assets/images/header/profile.svg";
import './header.css'
import React from 'react'

export const Header = () => {
  return (
    <div>
       <nav className="navbar">
      <div className=" flex  items-center justify-between mx-auto p-2">
        <Image src={search} alt={""} className="searchImage"/>

        <div className="flex  mt-4 md:mt-0">
          <Image src={flag} alt={""} />
          <Image src={moon} alt={""}  />
          <Image src={bell} alt={""} />
          <Image src={profile} alt={""} />
        </div>
      </div>
    </nav>
    </div>
  )
}

