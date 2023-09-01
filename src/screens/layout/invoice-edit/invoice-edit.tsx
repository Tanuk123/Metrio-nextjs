import React from "react";
import "../../../app/globals.css";
import "./invoice-edit.css";
import Image from "next/image";
import Send from "../../../assets/images/invoice-preview/send.svg";
import Doller from "../../../assets/images/invoice-preview/doller.svg";
import Logo from "../../../assets/images/sidebar/logo.svg";
import Close from "../../../assets/images/invoice-preview/close.svg";
import Plus from "../../../assets/images/invoice-preview/plus.svg";

export const InvoiceEdit = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 grid-first">
        <div className="row-span-3 bg-white p-3 col-span-3 rounded-md  bg-white">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image src={Logo} alt={""} />
              <span className="ml-3">MATERIO</span>
            </div>
            <div className="flex items-center">
              <h4 className="mr-5">Invoice</h4>
              <div>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-10 border border-gray-300 text-gray-400 text-sm rounded-md h-30 focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="# 4589"
                />
              </div>
            </div>
          </div>
          <div className="flex para justify-between items-center ">
            <p>
              Office 149, 450 South Brand Brooklyn
              <br /> San Diego County, CA 91905, USA
              <br /> +1 (123) 456 7891, +44 (876) 543 2198
            </p>
            <div className="flex items-center ">
              <p>Date Issued :</p>
              <input
                type="text"
                id="first_name"
                className="bg-gray-10 border border-gray-300 mt-3  text-gray-900 text-sm rounded-md h-30 focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12/13/2019"
              />
              {/* <span> 29/08/2020</span> */}
            </div>
          </div>
          <div className="flex justify-end">
            <input
              type="text"
              id="first_name"
              className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-md h-30 focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="04/23/2019"
            />
          </div>
          <hr />

          <div className="bill-para flex justify-between mt-6">
            <p>Invoice To:</p>
            <p className="mr-44">Bill To:</p>
          </div>
          <select className="invoice-dropdown bg-grey-10">
            <option>Dashboards</option>
            <option>CRM</option>
            <option>Analytics</option>
            <option>eCommerce</option>
          </select>
          <div className="bill-address mt-4 flex justify-between">
            <p>
              Hall-Robbins PLC <br />
              7777 Mendez Plains <br />
              (616) 865-4180
              <br />
              don85@johnson.com
            </p>
            <div className="bill-no flex">
              <span>
                Total Due: <br /> Bank name: <br /> Country: <br /> IBAN: <br />{" "}
                SWIFT code:
              </span>
              <div>
                <p>
                  $12,110.55 <br /> American Bank <br /> United States <br />{" "}
                  ETD95476213874685 <br /> BR91905
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ITEM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    HOURS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    COST
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {" "}
                    <select className="design-dropdown bg-grey-10 ">
                      <option>App Design</option>
                      <option>CRM</option>
                      <option>Analytics</option>
                      <option>eCommerce</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-md h-9 focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="24"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-md h-9 focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                    />
                  </td>
                  <td className="px-6 py-4">$24.00</td>
                  <td>
                    <Image src={Close} alt={""} />
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <textarea
                      id="message"
                      className="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-10 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Customization & Bug Fixes"
                    ></textarea>
                  </td>
                  <td className="px-6 py-4">
                    Discount: <br />
                    0% 0% 0%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="add-button flex items-center">
            {" "}
            <Image src={Plus} alt={""} className="ml-5" /> ADD ITEM
          </button>

          <hr />

          <div className="total-div mt-8 flex justify-between">
            <p>
              <b>Salesperson</b>:
              <input
                type="text"
                id="first_name"
                className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-md h-9 focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tommy Shelby "
              />
              <br />
              <input
                type="text"
                id="first_name"
                className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-md h-9 focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" Thanks for your business"
              />
            </p>
            <div className="bill-no flex ">
              <span>
                Subtotal: <br /> Discount: <br /> Tax: <br /> Total:
              </span>
              <p>
                $1800 <br /> $28 <br /> 21% <br />
                $1690
              </p>
            </div>
          </div>
          <hr />
          <div className="last-section mt-5">
            Note:{" "}
            <p>
              It was a pleasure working with you and your team. We hope you will
              keep us in mind for future freelance <br /> projects. Thank You!
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-md bg-white h-100  grid button-section">
          <button className="send flex items-center">
            <Image src={Send} alt={""} className="mx-5" />
            SEND INVOICE
          </button>
          <button className="edit">Edit Invoice</button>
          <button className="doller flex items-center">
            <Image src={Doller} alt={""} className="mx-5" />
            Add Payment{" "}
          </button>
        </div>
      </div>
    </>
  );
};
