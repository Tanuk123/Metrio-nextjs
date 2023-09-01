"use client"
import "../../../app/globals.css";
import Image from "next/image";
import "./chat-conversation.css";
import "../chat/chat.css";
import React from "react";
import FirstClient from "../../../assets/images/invoice-list/client-first.svg";
import SecondClient from "../../../assets/images/invoice-list/client-second.svg";
import ThirdClient from "../../../assets/images/invoice-list/client-third.svg";
import Search from "../../../assets/images/chat/search.svg";
import Phone from "../../../assets/images/chat/call.svg";
import Video from "../../../assets/images/chat/videocall.svg";
import More from "../../../assets/images/chat/more.svg";
import Mice from "../../../assets/images/chat/mice.svg";
import File from "../../../assets/images/chat/attachFile.svg";
import Text from "../../../assets/images/chat/Text.svg";
import { useRouter } from "next/navigation";

export const Chatconversation = () => {
  const router = useRouter()
  function chat() {
    router.push("/chat/conversation")
  }
  return (
    <>
      <div className="container-fluid shadow-lg rounded-lg grid-first">
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-3/12 border-r-2 overflow-y-auto">
            <div className="border-b-2 py-4 px-2 flex">
              <Image src={FirstClient} alt={""} className="ml-3" />
              <div className="relative items-center">
                <div className="absolute ">
                  <Image src={Search} alt={""} className="ml-7 mt-2" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="py-2 px-2 ml-5 border-2 placeholder-style border-gray-200 rounded-3xl h-9 w-4/5"
                  placeholder="Search..."
                  required
                ></input>
              </div>
            </div>
            <h1 className="chatText">Chats</h1>
            <div className="flex flex-row py-4 justify-start items-center  purple-div mt-5" onClick={chat}>
              <div className="w-1/12">
                <Image src={FirstClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Felecia Rower</div>
                <p className="">I will purchase it for sure. 👍</p>
              </div>
              <p className="ml-5">Apr 10</p>
            </div>
            <div className="flex flex-row py-3 justify-start items-center  white-div">
              <div className="w-1/12">
                <Image src={SecondClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Adalberto Granzin</div>
                <p className="text-gray-400	">UI/UX Designer</p>
              </div>
              <p className="ml-28">Apr 8</p>
            </div>
            <div className="flex flex-row py-4 justify-start items-center  white-div">
              <div className="w-1/12">
                <Image src={ThirdClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Zenia Jacobs</div>
                <p className="text-gray-400	">Building surveyor</p>
              </div>
              <p className="ml-28">Jan 16</p>
            </div>
            <h1 className="chatText">Contacts</h1>
            <div className="flex flex-row py-4 justify-start items-center  white-div mt-3">
              <div className="w-1/12">
                <Image src={FirstClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Felecia Rower</div>
                <p className="">I will purchase it for sure. 👍</p>
              </div>
            </div>
            <div className="flex flex-row py-3 justify-start items-center  white-div">
              <div className="w-1/12">
                <Image src={SecondClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Adalberto Granzin</div>
                <p className="text-gray-400	">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex flex-row py-4 justify-start items-center  white-div">
              <div className="w-1/12">
                <Image src={ThirdClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Zenia Jacobs</div>
                <p className="text-gray-400	">Building surveyor</p>
              </div>
            </div>
            <div className="flex flex-row py-4 justify-start items-center  white-div">
              <div className="w-1/12">
                <Image src={ThirdClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Felecia Rower</div>
                <p className="">I will purchase it for sure.</p>
              </div>
            </div>
          </div>

          <div className="w-9/12 px-5 second-section">
            <div className="my-44">
              <div className="chat-section flex justify-center ">
                <Image src={Text} alt={""} className="" />
              </div>
              <div className="conversation  flex justify-center mt-2">
                <button>Start Conversation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
