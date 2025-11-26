import React from 'react'
import {  X } from "lucide-react"; 
import { IndianRupee } from 'lucide-react';
const PaymentsBill = ({event, onClose}) => {
  
   
  return (
    <div>
      <div className="fixed top-10 left-10 w-[750px] h-150 bg-purple-100 border border-purple-300 shadow-xl rounded-xl p-6 animate-slide-up z-30 mt-10">

      {/* Close Button */}
      <button
        onClick={onClose} className="absolute top-3 right-3 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
      ><X size={18} />
      </button>

    <div className="bg-white sm:px-8 px-4 py-6">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-xl text-slate-900 font-semibold mb-6">Payment details</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
            <div>
              <div className="flex items-center">
                <input type="radio" name="method" className="w-5 h-5 cursor-pointer" id="card" checked />
                <label for="card" className="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                  <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                  <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                </label>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-medium">Pay with your debit or credit card</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
            <div>
              <div className="flex items-center">
                <input type="radio" name="method" className="w-5 h-5 cursor-pointer" id="paypal" />
                <label for="paypal" className="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-medium">Pay with your paypal account</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 mt-8">
          <div className="max-lg:col-span-full">
            <label className="text-sm text-slate-900 font-medium block mb-2">Cardholder's Name</label>
            <input type="text" placeholder="Enter Cardholder's Name"
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
          </div>
          <div className="max-lg:col-span-full">
            <label className="text-sm text-slate-900 font-medium block mb-2">Card Number</label>
            <input type="text" placeholder="Enter Card Number"
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
          </div>
          <div>
            <label className="text-sm text-slate-900 font-medium block mb-2">Expiry</label>
            <input type="text" placeholder="Enter EXP."
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
          </div>
          <div>
            <label className="text-sm text-slate-900 font-medium block mb-2">CVV</label>
            <input type="text" placeholder="Enter CVV"
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
          </div>
        </div>
        <div className="mt-8">
          <button type="button" className="cursor-pointer rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Pay now</button>
        </div>
      </div>

      <div>
        <ul className="text-slate-500 font-medium space-y-4 bg-gray-100 border border-gray-300 p-4 rounded-md">
          <li className="flex flex-wrap gap-4 text-sm">Subtotal<span className="ml-auto text-[15px] font-semibold text-slate-900">₹{event.price}</span>
</li>
          <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto text-[15px] font-semibold text-slate-900">₹0.00</span></li>
          <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto text-[15px] font-semibold text-slate-900">₹6.00</span></li>
          <li className="flex flex-wrap gap-4 text-sm">Number of Person <span className="ml-auto text-[15px] font-semibold text-slate-900">₹5.00</span></li>
          <hr className="border-slate-300" />
          <li className="flex flex-wrap gap-4 text-[20px] font-semibold text-slate-900">Total <span className="ml-auto">₹{event.price}</span></li>
        </ul>

        <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4 mt-8">
          <div>
            <h4 className="text-[15px] font-medium text-slate-900 mb-4">Shipping Address</h4>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 space-y-2 font-medium">
              <p className="text-slate-500 text-sm">Emily Johnson</p>
              <p className="text-slate-500 text-sm">425 Park Avenue</p>
              <p className="text-slate-500 text-sm">Unit 3C</p>
              <p className="text-slate-500 text-sm">San Francisco, CA 94107</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-medium text-slate-900 mb-4">Shipping Method</h3>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 font-medium">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-slate-900">Express Shipping</p>
                <p className="text-sm text-slate-500 mt-2">Estimated delivery: April 10-11, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default PaymentsBill