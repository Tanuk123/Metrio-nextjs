import "../../../app/globals.css";
import Image from "next/image";
import "./chat-right-modal.css";
import "../chat-left-modal/chat-left-modal.css";
import Client from "../../../assets/images/invoice-list/girl.svg";
import Close from "../../../assets/images/invoice-preview/close.svg";
import Delete from "../../../assets/images/chat/delete.svg";
import Tag from "../../../assets/images/chat/tag.svg";
import Star from "../../../assets/images/chat/star.svg";
import Media from "../../../assets/images/chat/media.svg";
import Block from "../../../assets/images/chat/block.svg";
import Phone from "../../../assets/images/chat/call.svg";
import Time from "../../../assets/images/chat/tag.svg";
import Mail from "../../../assets/images/chat/mail.svg";
import React from "react";

export const Chatrightmodal = () => {
  return (
    <div>
      <>
        <div className="container-fluid shadow-lg rounded-lg grid-first">
          <div className="flex flex-row justify-between bg-white">
            <div className="w-9/12 px-5 flex flex-col justify-between second-section"></div>
            <div className="flex flex-col w-3/12 border-r-2 overflow-y-auto">
              <div className="flex flex-row py-4 justify-start items-center white-div">
                <div className="flex justify-end closeIcon ">
                  <Image src={Close} alt={""} />
                </div>
              </div>
              <div className="flex flex-col items-center w-full py-3 px-4 rounded-lg">
                <div className="h-22 w-22 rounded-full border overflow-hidden">
                  <Image src={Client} alt={""} />
                </div>
                <div className="text-sm font-semibold mt-2">Felecia Rower</div>
                <div className="text-xs text-gray-500">Frontend Developer</div>
              </div>
              <div className="about-section mt-4">
                <h1>ABOUT</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content .
                </p>
              </div>
              <div className="setting-section mt-5">
                <h1>SETTINGS</h1>
                <div className="m-3">
                  <ul className="w-full rounded-lg mt-2 mb-3">
                    <li className="mb-1 flex">
                      <Image src={Mail} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">felecia_rower@gmail.com</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Phone} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">+1(123) 456 - 7890</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Time} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Mon - Fri 10AM - 8PM</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="setting-section mt-5">
                <h1>SETTINGS</h1>
                <div className="m-3">
                  <ul className="w-full rounded-lg mt-2 mb-3">
                    <li className="mb-1 flex">
                      <Image src={Tag} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Add Tag</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Star} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Importent Contect</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Media} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Shared Media</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Delete} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Delete Contect</span>
                    </li>
                    <li className="mt-3 flex">
                      <Image src={Block} alt={""} className="w-5 ml-1" />
                      <span className="ml-2 ">Block Contect</span>
                    </li>
                  </ul>
                </div>
                <div className="logout-btn">
                  <button>LOGOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
