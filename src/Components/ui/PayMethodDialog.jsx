import   React from "react"
import { FaTimes } from "react-icons/fa"
import Button from "./button"

 
const PaymentDialog = ({ isOpen, onClose, paymentMethod }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-[#353535f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Billing Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        {/* <p className="mb-4">You selected: {paymentMethod}</p> */}
        <div className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="s" className="block text-sm font-medium text-gray-700 mb-1">
                Security
              </label>
              <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded-md" placeholder="123" />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded-md" placeholder="123" />
            </div>
          </div>
        </div>
        <Button
          onClick={onClose}
          className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md font-semibold"
        >
          Confirm Payment
        </Button>
      </div>
    </div>
  )
}

export default PaymentDialog

