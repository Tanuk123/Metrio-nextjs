import "../../../app/globals.css";
import Image from "next/image";
import "./role-list.css";
import React from "react";
import Edit from "../../../assets/images/permission-list/edit.svg";
import Delete from "../../../assets/images/permission-list/delete.svg";

export const RoleList = () => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-7 gridSecond mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between py-4 ml-5 mt-3 bg-white dark:bg-gray-800">
            <div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-5 mr-3 border 
          rounded-lg  bg-white search
         "
                placeholder="Search Invoice"
              />
            </div>
            <div className="relative flex">
              <button className="invoice-button mr-2">CREATE INVOICE</button>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  ASSIGNED TO
                </th>
                <th scope="col" className="px-6 py-3">
                  CREATED DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Management</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Manage Billing & Roles</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Add & Remove Users</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ml-4 text-sm font-medium text-yellow-600 bg-yellow-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Manager
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Project Planning</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-600 bg-green-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    User
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Support
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Manage Email Sequences</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-yellow-600 bg-yellow-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Manager
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Client Communication</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-600 bg-green-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    User
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Only View</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 text-sm ml-3 font-medium text-red-600 bg-red-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Restricted User
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Financial Management</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 text-sm ml-3 font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Support
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Manage Others’ Tasks</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-purple-600 bg-purple-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Administrator
                  </span>
                  <span className="inline-flex items-center justify-center px-2 text-sm ml-3 font-medium text-yellow-600 bg-yellow-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Manager
                  </span>
                </td>
                <td className="px-6 py-4"> 14 Apr 2021, 8:43 PM</td>
                <td className="px-6 py-4 flex">
                  <Image src={Edit} alt={""} />
                  <Image src={Delete} alt={""} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
