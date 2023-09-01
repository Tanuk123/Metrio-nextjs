import "../../../app/globals.css";
import Image from "next/image";
import "./chat-left-modal.css";
import "../chat/chat.css";
import Client from "../../../assets/images/invoice-list/wBadge.svg";
import Close from "../../../assets/images/invoice-preview/close.svg";
import Verification from "../../../assets/images/chat/verification.svg";
import Bell from "../../../assets/images/chat/bell.svg";
import Person from "../../../assets/images/chat/person.svg";
import Delete from "../../../assets/images/chat/delete.svg";
import FirstClient from "../../../assets/images/invoice-list/client-first.svg";
import SecondClient from "../../../assets/images/invoice-list/client-second.svg";
import Search from "../../../assets/images/chat/search.svg";
import Phone from "../../../assets/images/chat/call.svg";
import Video from "../../../assets/images/chat/videocall.svg";
import More from "../../../assets/images/chat/more.svg";
import Mice from "../../../assets/images/chat/mice.svg";
import File from "../../../assets/images/chat/attachFile.svg";
import React from "react";

export const Chatleftmodal = () => {
  return (
    <>
      <div className="container-fluid shadow-lg rounded-lg grid-first">
        <div className="flex flex-row justify-between bg-white">
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
              <div className="text-sm font-semibold mt-2">John Doe</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <div className="about">
              <h1>ABOUT</h1>
              <p>
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.
              </p>
            </div>
            <div className="status-radio mt-5">
              <h1>STATUS</h1>
              <div className="ml-5 mt-3">
                <input
                  className="relative checked:bg-green-500 text-green-500"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                  checked
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault02"
                >
                  Online
                </label>
              </div>

              <div className="ml-5 mt-3">
                <input
                  className="relative "
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault01"
                >
                  Away
                </label>
              </div>
              <div className="ml-5 mt-3">
                <input
                  className="relative "
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault01"
                >
                  Do not Disturb
                </label>
              </div>
              <div className="ml-5 mt-3">
                <input
                  className="relative "
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault01"
                >
                  Offline
                </label>
              </div>
            </div>
            <div className="setting-section mt-5">
              <h1>SETTINGS</h1>
              <div className="m-3">
                <ul className="w-full rounded-lg mt-2 mb-3">
                  <li className="mb-1 flex">
                    <Image src={Verification} alt={""} className="w-5 ml-1" />
                    <span className="ml-2 ">Two-step Verification</span>
                  </li>
                  <li className="mt-3 flex">
                    <Image src={Bell} alt={""} className="w-5 ml-1" />
                    <span className="ml-2 ">Notification</span>
                  </li>
                  <li className="mt-3 flex">
                    <Image src={Person} alt={""} className="w-5 ml-1" />
                    <span className="ml-2 ">Invite Friends</span>
                  </li>
                  <li className="mt-3 flex">
                    <Image src={Delete} alt={""} className="w-5 ml-1" />
                    <span className="ml-2 ">Delete Account</span>
                  </li>
                </ul>
              </div>
              <div className="logout-btn">
                <button>LOGOUT</button>
              </div>
            </div>
          </div>

          <div className="w-9/12 px-5 flex flex-col justify-between second-section">
            {/* <div className="flex flex-col mt-1">
            <div className="flex flex-row py-3  items-center border-b-2 top-div">
              <div className="w-1/12">
                <Image src={SecondClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ">
                <div className=" ">Adalberto Granzin</div>
                <p className="text-gray-400	">UI/UX Designer</p>
              </div>
              <div className="icons flex">
                <Image src={Phone} alt={""} className="ml-3" />
                <Image src={Video} alt={""} className="ml-3" />
                <Image src={Search} alt={""} className="ml-3" />
                <Image src={More} alt={""} className="ml-3" />
              </div>
            </div>
            <div className="flex justify-end mb-4 mt-5">
              <div className="mr-2 py-3 px-4 bg-violet-500 text-border text-white text-xs">
                How can we help? We're here for you!
              </div>
              <Image src={FirstClient} alt={""} className="ml-3" />
            </div>
            <div className="flex justify-start mb-4">
              <Image src={SecondClient} alt={""} className="ml-3" />
              <div className="ml-2 py-3 px-4 bg-white rounded-br-3xl oposite-side-text text-black text-xs">
                Hey John, I am looking for the best admin template. Could you
                please help me to find it out?
              </div>
            </div>
            <div className="flex mb-4 ml-12">
              <div className="ml-2 py-3 px-4 bg-white rounded-br-3xl oposite-side-text text-black text-xs">
                It should be MUI v5 compatible.
              </div>
            </div>
            <div className="flex justify-end mb-4 mt-5">
              <div className="mr-2 py-3 px-4 bg-violet-500 text-border text-white text-xs">
                Absolutely!
              </div>
              <Image src={FirstClient} alt={""} className="ml-3" />
            </div>
            <div className="flex justify-end mr-12 mb-4 mt-5">
              <div className="mr-2 py-3 px-4 bg-violet-500 text-border text-white text-xs">
                This admin template is built with MUI!{" "}
              </div>
            </div>
            <div className="flex justify-start mb-4">
              <Image src={SecondClient} alt={""} className="ml-3" />
              <div className="ml-2 py-3 px-4 bg-white rounded-br-3xl oposite-side-text text-black text-xs">
                Looks clean and fresh UI. 😍
              </div>
            </div>
            <div className="flex mb-4 ml-12">
              <div className="ml-2 py-3 px-4 bg-white rounded-br-3xl oposite-side-text text-black text-xs">
                It's perfect for my next project.
              </div>
            </div>
            <div className="flex mb-4 ml-12">
              <div className="ml-2 py-3 px-4 bg-white rounded-br-3xl oposite-side-text text-black text-xs">
                How can I purchase it?
              </div>
            </div>
          </div>
          <div className="py-5">
            <input
              className="w-full bg-white py-5 px-3 h-12 rounded-xl input"
              type="text"
              placeholder="Type your messange here..."
            />
            <div className="send-btn flex">
              <Image src={Mice} alt={""} className="ml-3" />
              <Image src={File} alt={""} className="ml-3" />
              <button>Send</button>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
