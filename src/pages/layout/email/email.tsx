"use client"
import "../../../app/globals.css";
import Image from "next/image";
import "./email.css";
import email from "../../../assets/images/email/email.svg";
import Send from "../../../assets/images/email/send.svg";
import Draft from "../../../assets/images/email/draft.svg";
import Rating from "../../../assets/images/email/rating.svg";
import Checkbox from "../../../assets/images/email/check-box.svg";
import Spam from "../../../assets/images/email/spam.svg";
import Trash from "../../../assets/images/email/trash.svg";
import Delete from "../../../assets/images/email/delete.svg";
import Mail from "../../../assets/images/email/mail.svg";
import Error from "../../../assets/images/email/error.svg";
import Search from "../../../assets/images/email/Search.svg";
import Client from "../../../assets/images/invoice-list/client-fifth.svg";
import ClientFirst from "../../../assets/images/invoice-list/client-third.svg";
import ClientSecond from "../../../assets/images/invoice-list/client-six.svg";
import ClientThird from "../../../assets/images/invoice-list/client-eight.svg";
import ClientFourth from "../../../assets/images/invoice-list/client-seven.svg";
import ClientFifth from "../../../assets/images/invoice-list/client-second.svg";
import ClientSix from "../../../assets/images/invoice-list/client-first.svg";
import ClientSeven from "../../../assets/images/invoice-list/client-fourth.svg";
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export const Email = () => {
  const router = useRouter()
  function handleClick() {
    router.push("/email/email-open")
  }
  function Compose(){
    router.push("/email/email-compose")
  }

  return (
    <>
    
      <div className="container-fluid shadow-lg rounded-lg grid-first">
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-3/12 border-r-2 overflow-y-auto">
            <div className="py-4 flex mt-4" onClick={Compose}>
              <button className="compose-btn" >COMPOSE</button>
            </div>
            <div className="m-3">
              <ul className="w-full rounded-lg mt-2 mb-3 email-sidebar">
                <li className="mb-1 flex border-l-2 border-purple-600 ">
                  <Image src={email} alt={""} className="w-5 ml-1" />
                  <span className="ml-5 ">Inbox</span>
                  <span className="inline-flex items-center justify-center px-2 mx-40 text-sm font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    21
                  </span>
                </li>
                <li className="mt-3 flex">
                  <Image src={Send} alt={""} className="w-5 ml-1" />
                  <span className="ml-5 ">Sent</span>
                </li>
                <li className="mt-3 flex">
                  <Image src={Draft} alt={""} className="w-5 ml-1" />
                  <span className="ml-5 ">Draft</span>
                  <span className="inline-flex items-center justify-center px-2 mx-40 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    1
                  </span>
                </li>
                <li className="mt-3 flex">
                  <Image src={Rating} alt={""} className="w-5 ml-1" />
                  <span className="ml-5 ">Starred</span>
                </li>
                <li className="mt-3 flex">
                  <Image src={Spam} alt={""} className="w-5 ml-1" />
                  <span className="ml-5 ">Spam</span>
                  <span className="inline-flex items-center justify-center px-2 mx-40 text-sm font-medium text-red-600 bg-red-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    6
                  </span>
                </li>
                <li className="mt-3 flex">
                  <Image src={Trash} alt={""} className="w-5 ml-1" />
                  <span className="ml-5  ">Trash</span>
                </li>
              </ul>
            </div>

            <h1 className="label">LABELS</h1>
            <div className="m-3">
              <ul className="w-full rounded-lg mt-2 mb-3 email-sidebar ml-2">
                <li className="mb-1 flex items-center	">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  <span className="ml-5 ">Personal</span>
                </li>
                <li className="mt-3 flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-500 mr-2 mt-1"></div>
                  <span className="ml-5 ">Company</span>
                </li>
                <li className="mt-3 flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2 mt-1"></div>
                  <span className="ml-5 ">Important</span>
                </li>
                <li className="mt-3 flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-pink-500 mr-2 mt-1"></div>
                  <span className="ml-5 ">Private</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12  flex flex-col  second-section">
            <div className="header  flex items-center mt-3 ml-3 text-gray-400" >
              <Image src={Search} alt={""} />
              <p className="ml-3">Search mail</p>
            </div>
            <hr />
            <div className="second-box">
            <div className="flex items-center justify-start mt-3 ml-3 " onClick={handleClick} >
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={Client} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Tommy Sicilia{" "}
                <p className="text-gray-400 ml-5 text-xs">Theme Update</p>
              </span>
              <div className="h-2 w-2 rounded-full bg-pink-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">01:16 PM</p>
            </div>
            <hr />
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientFirst} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Tressa Gass
                <p className="text-gray-400 ml-5 text-xs"> Company Report</p>
              </span>
              <div className="h-2 w-2 rounded-full bg-pink-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">01:25 PM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientSecond} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Louetta Esses
                <p className="text-gray-400 ml-5 text-xs">
                  Waterfall Model Update
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">01:25 PM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientThird} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Waldemar Mannering
                <p className="text-gray-400 ml-5 text-xs">
                  {" "}
                  Quality-focused methodical flexibility
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-pink-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">04:32 PM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientFourth} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium" >
                Eb Begg
                <p className="text-gray-400 ml-5 text-xs">
                  Organized value-added model
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-pink-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">04:42 AM</p>
            </div>
            <hr />
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientThird} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
              Ardis Balderson   
                <p className="text-gray-400 ml-5 text-xs">
                Focused impactful open system 😃
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">10:45 AM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientFifth} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Modestine Spat
                <p className="text-gray-400 ml-5 text-xs">
                  Profound systemic alliance 🎉 🎊
                </p>
              </span>
              <Image src={Delete} alt={""}  className="ml-auto"/>{" "}
              <Image src={Mail} alt={""} className="ml-3" />
              <Image src={Error} alt={""} className="mr-4 ml-3"/>
            </div>
            <hr className="highlight"/>{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientSix} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Dalila Ouldcott
                <p className="text-gray-400 ml-5 text-xs">
                  User-friendly value-added application 😊
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-pink-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">05:55 PM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientSeven} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Lockwood Kubicek
                <p className="text-gray-400 ml-5 text-xs">
                  I went to the movie alone.
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">11:12 AM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientFirst} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Milena Osgarby
                <p className="text-gray-400 ml-5 text-xs">
                  We sang and danced all night long.
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">10:16 PM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientSecond} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Pheoebe Buffay
                <p className="text-gray-400 ml-5 text-xs">
                  {" "}
                  He told us a very exciting adventure story.
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">12:34 AM</p>
            </div>
            <hr />{" "}
            <div className="flex items-center justify-start mt-3 ml-3 ">
              <Image src={Checkbox} alt={""} />
              <Image src={Rating} alt={""} className="ml-3" />
              <Image src={ClientThird} alt={""} className="ml-3 w-7" />
              <span className="flex ml-3 items-center text-sm font-medium">
                Temple Olrenshaw
                <p className="text-gray-400 ml-5 text-xs">
                  The sun had set and so had his dreams.
                </p>
              </span>
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-2 ml-auto"></div>
              <p className="mr-5 text-xs text-gray-400">10:45 AM</p>
            </div>
            <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

