"use client"
import "../../../app/globals.css";
import Image from "next/image";
import "./chat.css";
import FirstClient from "../../../assets/images/invoice-list/client-first.svg";
import SecondClient from "../../../assets/images/invoice-list/client-second.svg";
import ThirdClient from "../../../assets/images/invoice-list/client-third.svg";
import Search from "../../../assets/images/chat/search.svg";
import Phone from "../../../assets/images/chat/call.svg";
import Video from "../../../assets/images/chat/videocall.svg";
import More from "../../../assets/images/chat/more.svg";
import Mice from "../../../assets/images/chat/mice.svg";
import File from "../../../assets/images/chat/attachFile.svg";
import React from "react";
import { useRouter } from "next/navigation";

export const Chat = () => {
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
            <div className="flex flex-row py-4 justify-start items-center  purple-div mt-5" >
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
            <div className="flex flex-row py-4 justify-start items-center border-b-2 white-div">
              <div className="w-1/12">
                <Image src={ThirdClient} alt={""} className="ml-3" />
              </div>
              <div className="w-30 ml-6">
                <div className=" ">Felecia Rower</div>
                <p className="">I will purchase it for sure.</p>
              </div>
            </div>
          </div>

          <div className="w-9/12 px-5 flex flex-col justify-between second-section">
            <div className="flex flex-col mt-1">
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
                <div className="mr-2 py-3 px-4 bg-violet-500 text-border text-white text-xs ">
                  How can we help? We&apos;re here for you!
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
                  It&apos;s perfect for my next project.
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
