"use client"
// import "../../../app/globals.css";
import "./invoice-list.css";
import Image from "next/image";
import ArrowUpward from "../../../assets/images/invoice-list/ArrowUpward.svg";
import GreenArrow from "../../../assets/images/invoice-list/green-arrow.svg";
import FirstClient from "../../../assets/images/invoice-list/client-first.svg";
import Delete from "../../../assets/images/invoice-list/delete.svg";
import Eye from "../../../assets/images/invoice-list/eye.svg";
import More from "../../../assets/images/invoice-list/more.svg";
import React from "react";
import { useRouter } from "next/navigation";

export const InvoiceList = () => {
  const router = useRouter()
  function handleClick() {
    router.push("/invoice/invoice-preview")
  }
  function invoice() {
    router.push("/invoice/invoice-add")
  }
  return (
    <>
    
    
      <div className="grid grid-cols-1 grid-rows-2 gridFirst">
        <h1>Filters</h1>
        <div>
          <div className="flex md:gap-6">
            <select className="dropdown-menu">
              <option> Select Status</option>
              <option>CRM</option>
              <option>Analytics</option>
              <option>eCommerce</option>
            </select>
            <select className="dropdown-menu">
              <option> Invoice Date</option>
              <option>CRM</option>
              <option>Analytics</option>
              <option>eCommerce</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-7 gridSecond mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
            <div>
              <select className="dropdown">
                <option> Action</option>
                <option>CRM</option>
                <option>Analytics</option>
                <option>eCommerce</option>
              </select>
            </div>
            <div className="relative flex" >
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-5 mr-3 border 
          rounded-lg  bg-white search
         "
                placeholder="Search Invoice"
                onClick={invoice}
              />
              <button className="invoice-button mr-2" onClick={handleClick}>CREATE INVOICE</button>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  <Image src={ArrowUpward} alt={""} />
                </th>
                <th scope="col" className="px-6 py-3">
                  CLIENT
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL
                </th>
                <th scope="col" className="px-6 py-3">
                  ISSUED DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  BALANCE
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
                <td className="px-6 py-4">#4910</td>
                <td className="px-6 py-4">
                  {" "}
                  <Image src={GreenArrow} alt={""} />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                >
                  <Image src={FirstClient} alt={""} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$3428</td>
                <td className="px-6 py-4">22 Oct 2019</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 flex">
                  <Image src={Delete} alt={""} /> <Image src={Eye} alt={""} />{" "}
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
                <td className="px-6 py-4">#4910</td>
                <td className="px-6 py-4">
                  {" "}
                  <Image src={GreenArrow} alt={""} />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                >
                  <Image src={FirstClient} alt={""} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$3428</td>
                <td className="px-6 py-4">22 Oct 2019</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 flex">
                  <Image src={Delete} alt={""} /> <Image src={Eye} alt={""} />{" "}
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
                <td className="px-6 py-4">#4910</td>
                <td className="px-6 py-4">
                  {" "}
                  <Image src={GreenArrow} alt={""} />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                >
                  <Image src={FirstClient} alt={""} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$3428</td>
                <td className="px-6 py-4">22 Oct 2019</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 flex">
                  <Image src={Delete} alt={""} /> <Image src={Eye} alt={""} />{" "}
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
                <td className="px-6 py-4">#4910</td>
                <td className="px-6 py-4">
                  {" "}
                  <Image src={GreenArrow} alt={""} />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                >
                  <Image src={FirstClient} alt={""} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$3428</td>
                <td className="px-6 py-4">22 Oct 2019</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 flex">
                  <Image src={Delete} alt={""} /> <Image src={Eye} alt={""} />{" "}
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
                <td className="px-6 py-4">#4910</td>
                <td className="px-6 py-4">
                  {" "}
                  <Image src={GreenArrow} alt={""} />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
                >
                  <Image src={FirstClient} alt={""} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$3428</td>
                <td className="px-6 py-4">22 Oct 2019</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 flex">
                  <Image src={Delete} alt={""} /> <Image src={Eye} alt={""} />{" "}
                  <Image src={More} alt={""} />
                </td>
              </tr>
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
              <td className="px-6 py-4">#4910</td>
              <td className="px-6 py-4">
                {" "}
                <Image src={GreenArrow} alt={""} />
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white"
              >
                <Image src={FirstClient} alt={""} />
                <div className="pl-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">$3428</td>
              <td className="px-6 py-4">22 Oct 2019</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Paid
                </span>
              </td>
              <td className="px-6 py-4 flex">
                <Image src={Delete} alt={""} />{" "}
                <Image src={Eye} alt={""} />{" "}
                <Image src={More} alt={""} />
              </td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
