import "./roles.css";
import Image from "next/image";
import FirstClient from "../../../assets/images/invoice-list/client-fourth.svg";
import SecondClient from "../../../assets/images/invoice-list/client-fifth.svg";
import ThirdClient from "../../../assets/images/invoice-list/client-second.svg";
import Copy from "../../../assets/images/roles/copy.svg";
import Boy from "../../../assets/images/roles/boy.svg";
import More from "../../../assets/images/invoice-list/more.svg";
import Admin from "../../../assets/images/roles/admin.svg";
import Subscriber from "../../../assets/images/roles/subscriber.svg";
import Editor from "../../../assets/images/roles/editor.svg";
import Maintainer from "../../../assets/images/roles/maintainer.svg";
import EXPORT from "../../../assets/images/user/Masked Icon.svg";
import React from "react";

export const Roles = () => {
  return (
    <>
      <div className="role-div">
        <div className="first-div">
          <h1>Roles List</h1>
          <p>
            A role provided access to predefined menus and features so that
            depending on assigned role an administrator can have access to what
            he need
          </p>
        </div>
        <div className="mx-2 grid grid-cols-3 gap-4 grid-first">
          <div className="bg-white first_div">
            <div className="flex user-para">
              <p>Total 4 users</p>
              <div className="main-container">
                <div id="icons-container">
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={SecondClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={ThirdClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="admin">Administrator</h1>
            <div className="second-para flex items-center justify-between edit-role">
              <p>Edit Role</p>
              <Image src={Copy} alt={""} className="mr-5 w-5" />
            </div>
          </div>
          <div className="bg-white first_div">
            <div className="flex user-para">
              <p>Total 7 users</p>
              <div className="main-container">
                <div id="icons-container">
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={SecondClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={ThirdClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="admin">Administrator</h1>
            <div className="second-para flex items-center justify-between edit-role">
              <p>Edit Role</p>
              <Image src={Copy} alt={""} className="mr-5 w-5" />
            </div>
          </div>
          <div className="bg-white first_div">
            <div className="flex user-para">
              <p>Total 5 users</p>
              <div className="main-container">
                <div id="icons-container">
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={SecondClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={ThirdClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="admin">Users</h1>
            <div className="second-para flex items-center justify-between edit-role">
              <p>Edit Role</p>
              <Image src={Copy} alt={""} className="mr-5 w-5" />
            </div>
          </div>
          <div className="bg-white first_div">
            <div className="flex user-para">
              <p>Total 6 users</p>
              <div className="main-container">
                <div id="icons-container">
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={SecondClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={ThirdClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="admin">Support</h1>
            <div className="second-para flex items-center justify-between edit-role">
              <p>Edit Role</p>
              <Image src={Copy} alt={""} className="mr-5 w-5" />
            </div>
          </div>
          <div className="bg-white first_div">
            <div className="flex user-para">
              <p>Total 10 users</p>
              <div className="main-container">
                <div id="icons-container">
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={SecondClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={ThirdClient} alt={""} />
                  </div>
                  <div className="single-icon-container">
                    {" "}
                    <Image src={FirstClient} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="admin">Restricted User</h1>
            <div className="second-para flex items-center justify-between edit-role">
              <p>Edit Role</p>
              <Image src={Copy} alt={""} className="mr-5 w-5" />
            </div>
          </div>
          <div className="bg-white first_div flex  justify-between">
            <Image src={Boy} alt={""} className="w-10 mt-7 ml-8" />
            <button className="role-button mr-6 mt-5 ">ADD ROLE</button>
          </div>
        </div>
        <div className="second-div">
          <h1>Total users with their roles</h1>
          <p>
            Find all of your company’s administrator accounts and their
            associate roles.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-7 gridSecond mt-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
              <div>
                <button className="flex items-center export-button ml-4">
                  <Image src={EXPORT} alt={""} className="ml-3" />
                  EXPORT
                </button>
              </div>
              <div className="relative flex">
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-5 mr-3 border 
          rounded-lg  bg-white search
         "
                  placeholder="Search Invoice"
                />
                <button className="invoice-button mr-2">ADD USER</button>
              </div>
            </div>
            <div className="overflow-x">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto overflow-scroll w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 
                        rounded focus:ring-blue-400 dark:focus:ring-blue-400
                       dark:ring-offset-gray-400 dark:focus:ring-offset-gray-400 focus:ring-2 dark:bg-gray-400
                        dark:border-gray-400"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      USER
                    </th>
                    <th scope="col" className="px-6 py-3">
                      EMAIL
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ROLE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PLAN
                    </th>
                    <th scope="col" className="px-6 py-3">
                      STATUS
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      <Image src={FirstClient} alt={""} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Jordan Stevenson
                        </div>
                        <div className="font-normal text-gray-500">
                          @amiccoo
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">susanna.Lind57@gmail.com</td>
                    <td className="px-6 py-4 flex">
                      {" "}
                      <Image src={Admin} alt={""} />
                      Admin
                    </td>
                    <td className="px-6 py-4"> Enterprise</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 flex">
                      <Image src={More} alt={""} />
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      <Image src={SecondClient} alt={""} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Benedetto Rossiter
                        </div>
                        <div className="font-normal text-gray-500">
                          @brossiter15
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">estelle.Bailey10@gmail.com</td>
                    <td className="px-6 py-4 flex">
                      {" "}
                      <Image src={Editor} alt={""} />
                      Editor
                    </td>
                    <td className="px-6 py-4"> Team</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 flex">
                      <Image src={More} alt={""} />
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      <Image src={FirstClient} alt={""} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Bentlee Emblin
                        </div>
                        <div className="font-normal text-gray-500">
                          @bemblinf
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">milo86@hotmail.com</td>
                    <td className="px-6 py-4 flex">
                      {" "}
                      <Image src={Maintainer} alt={""} />
                      Maintainer
                    </td>
                    <td className="px-6 py-4"> Company</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 flex">
                      <Image src={More} alt={""} />
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      <Image src={SecondClient} alt={""} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Bertha Biner
                        </div>
                        <div className="font-normal text-gray-500">
                          @bbinerh
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">lonnie35@hotmail.com</td>
                    <td className="px-6 py-4 flex">
                      {" "}
                      <Image src={Subscriber} alt={""} />
                      Subscriber
                    </td>
                    <td className="px-6 py-4"> Team</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 flex">
                      <Image src={More} alt={""} />
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      <Image src={FirstClient} alt={""} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Jordan Stevenson
                        </div>
                        <div className="font-normal text-gray-500">
                          @amiccoo
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">susanna.Lind57@gmail.com</td>
                    <td className="px-6 py-4 flex">
                      {" "}
                      <Image src={Admin} alt={""} />
                      Admin
                    </td>
                    <td className="px-6 py-4"> Enterprise</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 flex">
                      <Image src={More} alt={""} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
