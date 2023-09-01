import "../../../app/globals.css";
import Image from "next/image";
import "./user-overview.css";
import Client from "../../../assets/images/user/user.svg";
import Project from "../../../assets/images/user/project-done.svg";
import Task from "../../../assets/images/user/task-done.svg";
import React from "react";

export const UserOverview = () => {
  return (
    <>
      <div className="container-fluid shadow-lg rounded-lg grid-first">
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-3/12 border-r-2 overflow-y-auto">
            <div className="flex flex-col items-center w-full py-3 px-4 rounded-lg mt-10">
              <div className="h-21 w-21  overflow-hidden">
                <Image src={Client} alt={""} />
              </div>
              <div className="text-lg font-semibold text-gray-600 mt-3">
                Seth Hallam
              </div>
              <div className="button-red mt-3 flex flex-col items-center">
                <button>Subscriber</button>
              </div>
            </div>
            <div className="mail-div flex ml-4">
              <div className="flex rating flex-row py-4 justify-start items-center  purple-div ">
                <div className="w-10">
                  <Image src={Task} alt={""} className="ml-3" />
                </div>
                <div className="w-31 ml-6">
                  <div className=" ">1.23k</div>
                  <p className="text-sm text-gray-400">Task Done</p>
                </div>
              </div>
              <div className="flex rating flex-row py-4 justify-start items-center  purple-div  ">
                <div className="w-10">
                  <Image src={Project} alt={""} className="ml-3" />
                </div>
                <div className="w-30 ml-6">
                  <div className=" ">568</div>
                  <p className="text-sm text-gray-400">Project Done</p>
                </div>
              </div>
            </div>
            <div className="details">
              <h1>Details</h1>
              <hr />
              <div className="setting-section mt-5">
                <ul className="w-10/14 text-sm ml-6">
                  <li className="mb-1 flex ">
                    <p className=" font-semibold text-gray-700">
                      Username:{" "}
                      <span className="text-sm text-gray-400">@shallamb</span>
                    </p>
                  </li>
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Billing Email:
                      <span className="text-sm text-gray-400">
                        shallamb@gmail.com
                      </span>
                    </p>
                  </li>{" "}
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Status:
                      <span className="text-sm text-gray-400">
                        shallamb@gmail.com
                      </span>
                    </p>
                  </li>{" "}
                  <li className="mb-1 flex mt-2 ">
                    <p className=" font-semibold text-gray-700">
                      Role:
                      <span className="text-sm text-gray-400">Subscriber</span>
                    </p>
                  </li>{" "}
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Tax ID:
                      <span className="text-sm text-gray-400">Tax-8894</span>
                    </p>
                  </li>
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Contact:
                      <span className="text-sm text-gray-400">
                        +1 (234) 464-0600
                      </span>
                    </p>
                  </li>
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Language:{" "}
                      <span className="text-sm text-gray-400">English</span>
                    </p>
                  </li>
                  <li className="mb-1 flex mt-2">
                    <p className=" font-semibold text-gray-700">
                      Country:
                      <span className="text-sm text-gray-400">Peru</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="buttons mb-5 mt-2">
                <button className="edit">EDIT</button>
                <button className="suspend">SUSPEND</button>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="standard">Standard</button>
          </div>

          <div className="w-9/12  flex flex-col  second-section"></div>
        </div>
      </div>
    </>
  );
};
