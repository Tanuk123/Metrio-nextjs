"use client"
import React from "react";
import "../../../app/globals.css";
import "./invoice-preview.css";
import Image from "next/image";
import Send from "../../../assets/images/invoice-preview/send.svg";
import Doller from "../../../assets/images/invoice-preview/doller.svg";
import Logo from "../../../assets/images/sidebar/logo.svg";
import { useRouter } from "next/navigation";

export const InvoicePreview = () => {
  const router = useRouter()
  function edit() {
    router.push("/invoice/invoice-edit")
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-4 grid-first">
        <div className="row-span-3 bg-white p-3 col-span-3 rounded-md  bg-white">
          <div className="flex justify-between">
            <div className="flex">
              <Image src={Logo} alt={""} />
              <span className="ml-3">MATERIO</span>
            </div>
            <h4 className="mr-20">Invoice #3492</h4>
          </div>
          <div className="flex para justify-between mr-5">
            <p>
              Office 149, 450 South Brand Brooklyn
              <br /> San Diego County, CA 91905, USA
              <br /> +1 (123) 456 7891, +44 (876) 543 2198
            </p>
            <div>
              <p>Date Issued: 25/08/2020</p>
              <span>Date Due: 29/08/2020</span>
            </div>
          </div>
          <hr />

          <div className="bill-para flex justify-between mt-6">
            <p>Invoice To:</p>
            <p className="mr-44">Bill To:</p>
          </div>
          <div className="bill-address mt-4 flex justify-between">
            <p>
              Thomas shelby Shelby
              <br /> Company Limited Small Heath,
              <br /> B10 0HF, UK 718-986-6062 <br />
              peakyFBlinders@gmail.com
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
                    DESCRIPTION
                  </th>
                  <th scope="col" className="px-6 py-3">
                    HOURS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    QTY
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Premium Branding Package
                  </th>
                  <td className="px-6 py-4">Branding & Promotion</td>
                  <td className="px-6 py-4">48</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">$32</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Social Media
                  </th>
                  <td className="px-6 py-4">Social media templates</td>
                  <td className="px-6 py-4">42</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">$28</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Web Design
                  </th>
                  <td className="px-6 py-4">Web designing package</td>
                  <td className="px-6 py-4">46</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">$24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="total-div mt-8 flex justify-between">
            <p>
              <b>Salesperson</b>: Tommy Shelby <br />
              Thanks for your business
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
          <p className="last-section mt-5">
            <b>Note:</b> It was a pleasure working with you and your team. We
            hope you will keep us in mind for future freelance <br /> projects.
            Thank You!
          </p>
          <div className="buttons flex justify-end">
            <button className="print-button mr-5">PRINT</button>
            <button className="download-btn mr-2">DOWNLOAD</button>
          </div>
        </div>

        <div className="bg-white p-3 rounded-md bg-white h-100  grid button-section">
          <button className="send flex items-center">
            <Image src={Send} alt={""} className="mx-5" /> SEND INVOICE
          </button>
          <button className="edit" onClick={edit}>Edit Invoice</button>
          <button className="doller flex items-center">
            <Image src={Doller} alt={""} className="mx-5" /> Add Payment{" "}
          </button>
        </div>
      </div>
    </>
  );
};
