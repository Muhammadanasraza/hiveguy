import React from "react"
import { useState } from "react"
import { FaCreditCard, FaTicketAlt } from "react-icons/fa"
import { SiVisa, SiMastercard } from "react-icons/si"
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5"
import { MdKeyboardArrowRight } from "react-icons/md"
import Button from "../Components/ui/button"

export default function CutomerInfoPage() {

  const [selectedPayment, setSelectedPayment] = useState("visa")
  const [addressType, setAddressType] = useState("home")
  const [addressOption, setAddressOption] = useState("delivery")

  return (
    <div className="bg-[#FFF6F6]">
    <div className="max-w-7xl mx-auto p-4  md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6 ">
          {/* Customer Information */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>

                <div className="my-3">
                  <label className="block text-sm mb-2">Full Name</label>
                  <input type="text" defaultValue="Pikachu Chopechan" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>

                <label className="block text-sm mb-2">Country</label>
                <input type="text" defaultValue="United States" className="w-full p-3 border border-gray-300 rounded-lg" />

                <div className="my-3">
                  <label className="block text-sm mb-2">City</label>
                  <input type="text" defaultValue="(469) 123-0000" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="my-3">
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input type="tel" defaultValue="(469) 123-0000" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div>

                <div className="my-3">
                  <label className="block text-sm mb-2">Email Add</label>
                  <input type="email" defaultValue="Pikachu Chopechan" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>

                <div className="mt-8">
                  <label className="block text-sm mb-2">Select a label for effective delivery:</label>
                  <div className="flex gap-4">
                    <button
                      className={`px-6 py-2 rounded-lg ${addressType === "home" ? "bg-white shadow-sm" : "bg-gray-50"}`}
                      onClick={() => setAddressType("home")}
                    >
                      Home
                    </button>
                    <button
                      className={`px-6 py-2 rounded-lg ${addressType === "office" ? "bg-white shadow-sm" : "bg-gray-50"}`}
                      onClick={() => setAddressType("office")}
                    >
                      Office
                    </button>
                  </div>
                </div>

                <div className="mt-6 ">
                  <label className="block text-sm mb-2">Default Address (Optional)</label>
                  <div className="space-y-2 shadow-sm p-3 rounded-xl">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="address"
                        checked={addressOption === "delivery"}
                        onChange={() => setAddressOption("delivery")}
                        className="hidden"
                      />
                      {addressOption === "delivery" ? (
                        <IoRadioButtonOn className="w-5 h-5 text-blue-500" />
                      ) : (
                        <IoRadioButtonOff className="w-5 h-5 text-gray-400" />
                      )}
                      Default delivery address
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="address"
                        checked={addressOption === "billing"}
                        onChange={() => setAddressOption("billing")}
                        className="hidden"
                      />
                      {addressOption === "billing" ? (
                        <IoRadioButtonOn className="w-5 h-5 text-blue-500" />
                      ) : (
                        <IoRadioButtonOff className="w-5 h-5 text-gray-400" />
                      )}
                      Default billing address
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Your existing default address setting will be replaced if you make some changes here
                    </p>
                  </div>
                </div>

              </div>
            </div>




          </div>

          {/* Flash Store Section */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Flash store's</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm">T900 Ultra 2 Series II 2024 T900 Ultra 2 Smart Watch For Men Wom...</p>
                <p className="text-xs text-gray-500">No Brand/Color Family/All Black T900 Ultra 2</p>
              </div>
              <div className="text-right">
                <p>Gyd. 1,749</p>
                <p>Gyd. 1,749</p>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-3 inline-block mb-4">
              <div className="flex items-center gap-2 text-pink-600">
                <FaTicketAlt />
                <span>Standard Delivery | Gyd. 145</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">Receive by 3 Jun-8 Jun</p>
            </div>

            <div className="flex items-center justify-between border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <FaTicketAlt className="text-pink-600" />
                <span>Store Voucher</span>
              </div>
              <button className="flex items-center text-gray-600">
                Get voucher
                <MdKeyboardArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-right mt-4">
              <p className="text-sm text-gray-600">
                1 item(s), Subtotal: <span className="text-pink-600">Gyd. 1,894</span>
              </p>
              <p className="text-sm text-gray-600">Saved Gyd. 1,750</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6  ">
          {/* Discount and Payment */}
          <div className="bg-white rounded-3xl p-6  shadow-sm ">
            <h2 className="text-xl font-bold mb-6">Discount and Payment</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaTicketAlt className="text-pink-600" />
                  <span>HiveGy Voucher</span>
                </div>
                <span className="text-gray-500">No Applicable Voucher</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaTicketAlt className="text-pink-600" />
                  <span>Promo Code</span>
                </div>
                <button className="flex items-center text-gray-400">
                  Enter Store/HiveGY Code
                  <MdKeyboardArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            <div className="border-t pt-4 space-y-4">
              <h3 className="font-bold">Order Summary</h3>
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>Gyd. 1,749</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>Gyd. 145</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Payment</span>
                <span>Gyd. 1,894</span>
              </div>
              <p className="text-sm text-gray-500">VAT included, where applicable</p>

              <Button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold">
                Place order
              </Button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Payment method</h2>
            <p className="text-sm text-gray-500 mb-4">Select the bank for payment of your item</p>

            <div className="space-y-4">
              {[
                { id: "visa", icon: <SiVisa className="w-12 h-8 text-blue-700" /> },
                { id: "visa-electron", icon: <SiVisa className="w-12 h-8 text-blue-700" /> },
                { id: "mastercard", icon: <SiMastercard className="w-12 h-8 text-red-500" /> },
                { id: "maestro", icon: <SiMastercard className="w-12 h-8 text-red-500" /> },
              ].map((payment) => (
                <label
                  key={payment.id}
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    {payment.icon}
                    <span className="text-sm text-gray-500">Select the bank for payment of your item</span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedPayment === payment.id}
                    onChange={() => setSelectedPayment(payment.id)}
                    className="hidden"
                  />
                  {selectedPayment === payment.id ? (
                    <IoRadioButtonOn className="w-5 h-5 text-pink-600" />
                  ) : (
                    <IoRadioButtonOff className="w-5 h-5 text-gray-400" />
                  )}
                </label>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
    </div>
  )
}

