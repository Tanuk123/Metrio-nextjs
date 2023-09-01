import "../../../app/globals.css";
import Image from "next/image";
import "./emailopen.css";
import email from "../../../assets/images/email/email.svg";
import Send from "../../../assets/images/email/send.svg";
import Draft from "../../../assets/images/email/draft.svg";
import Rating from "../../../assets/images/email/rating.svg";
import Spam from "../../../assets/images/email/spam.svg";
import Trash from "../../../assets/images/email/trash.svg";
import Delete from "../../../assets/images/email/delete.svg";
import Mail from "../../../assets/images/email/mail.svg";
import Arrowleft from "../../../assets/images/email/ArrowBackIosNew.svg";
import Arrowright from "../../../assets/images/email/ArrowForwardIos.svg";
import Expand from "../../../assets/images/email/Expand.svg";
import More from "../../../assets/images/email/MoreVert.svg";
import Folder from "../../../assets/images/email/FolderOpen.svg";
import Label from "../../../assets/images/email/Label.svg";
import Client from "../../../assets/images/invoice-list/client-fifth.svg";
import Star from "../../../assets/images/email-open/star.svg";
import Attach from "../../../assets/images/email-open/attachment.svg";
import React from "react";

export const EmailOpen = () => {
  return (
    <>
      <div className="container-fluid shadow-lg rounded-lg grid-first">
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-3/12 border-r-2 overflow-y-auto">
            <div className="py-4 flex mt-4">
              <button className="compose-btn">COMPOSE</button>
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
            <div className="header  flex items-center mt-3 ml-4 text-gray-600">
              <Image src={Arrowleft} alt={""} className="w-5" />
              <p className="ml-5 ">Last financial year profit sheet</p>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm  text-yellow-500 bg-orange-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Important
              </span>
              <Image src={Arrowleft} alt={""} className="w-4 ml-auto" />
              <Image src={Arrowright} alt={""} className="w-4 ml-5 mr-5" />
            </div>
            <hr />
            <div className="header  flex items-center mt-3 ml-4 text-gray-600">
              <Image src={Delete} alt={""} />
              <Image src={Mail} alt={""} className="ml-3" />
              <Image src={Folder} alt={""} className="ml-3" />
              <Image src={Label} alt={""} className="ml-3" />
              <Image src={Expand} alt={""} className="ml-auto" />
              <Image src={More} alt={""} className="mr-5 ml-5" />
            </div>
            <hr />
            <div className="second-box">
              <div className="flex justify-center message-text mt-5">
                <p>4 Earlier Messages</p>
              </div>

              <div className="inner-box flex justify-center">
                <div
                  className="w-full max-w-3xl  bg-white border border-gray-200 rounded-lg shadow
                dark:bg-gray-800 dark:border-gray-700 mt-7 p-2"
                >
                  <div className="flow-root ml-5 mt-2">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li className="">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Image src={Client} alt={""} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-600 truncate dark:text-white">
                              Milena Osgarby
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              milena.osgarby@gmail.com
                            </p>
                          </div>
                          <div className="inline-flex items-center text-sm text-gray-500 dark:text-white ">
                            <p className="ml-auto">Thu Jan 13 2022 11:14 AM</p>
                            <Image src={Attach} alt={""} className="ml-4" />
                            <Image src={Star} alt={""} className="ml-2" />
                            <Image src={More} alt={""} className="ml-1" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="message mt-3 ml-7">
                    <p className="text-gray-500 text-sm">Hey John,</p>
                    <p className="text-gray-400 text-sm mt-3">
                      wellish laminable ineunt popshop catalyte prismatize
                      campimetrical lentisk excluding portlet coccinellid
                      impestation Bangash Lollardist perameloid procerebrum
                      presume cashmerette washbasin nainsook Odontolcae Alea
                      holcodont welted
                      <br />
                      <br />
                      cibarious terrifical uploop naphthaleneacetic containable
                      nonsailor Zwinglian blighty benchful guar porch fallectomy
                      building coinvolve eidolism warmth unclericalize
                      seismographic recongeal ethanethial clog regicidal
                      regainment legific
                    </p>
                  </div>
                </div>
              </div>

              <div className="outer-box flex justify-center mb-40">
                <div
                  className="w-full max-w-3xl  bg-white border border-gray-200 rounded-lg shadow
                dark:bg-gray-500 dark:border-gray-500 mt-7 p-4 text-sm text-gray-500 "
                >
                  <p className="ml-4">
                    Click here to <span className="text-violet-700">Reply</span>{" "}
                    or <span className="text-violet-700">Forward</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
