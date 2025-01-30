import { useState } from "react";
import { FaUniversity, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';
import craditcard from '../../assets/images/craditcard.png';
import craditcard2 from '../../assets/images/craditcard.png';
import Button from "../ui/button";
import succes from '../../assets/images/succces.png'



export default function PaymentOptions() {
  const [showDialog, setShowDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleConfirm = () => {
    setShowDialog(false);
    setShowSuccessDialog(true);
    setTimeout(() => setShowSuccessDialog(false), 2000);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">My Payment Options</h2>
      
      {/* Bank Account Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <div className="flex flex-col items-center">
          <FaUniversity className="text-pink-700 text-4xl mb-2" />
          <h3 className="text-lg font-medium">Bank Account</h3>
          <button 
            className="mt-4 px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setShowDialog(true)}
          >
            + Add Bank Card
          </button>
        </div>
      </div>
      
      {/* Digital Wallet Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex flex-col items-center">
          <FaWallet className="text-pink-700 text-4xl mb-2" />
          <h3 className="text-lg font-medium">Digital Wallet</h3>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-3">
              <img src={left} alt="SurePay" width={80} height={30} />
              <span className="text-gray-500 text-sm">Account is required</span>
            </div>
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-3">
              <img src={right} alt="MMG" width={80} height={30} />
              <span className="text-gray-500 text-sm">Account is required</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dialog for Adding Bank Card */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353535f0] bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            <button className="absolute top-4 right-4" onClick={() => setShowDialog(false)}>
              <AiOutlineClose className="text-2xl text-gray-600 hover:text-gray-800" />
            </button>
            <h3 className="text-xl font-bold mb-4">Add Bank</h3>
            <div className="flex gap-2 mb-4">
              <img src={visa} alt="Visa" className="w-12" />
              <img src={mastercard} alt="Mastercard" className="w-12" />
              <img src={craditcard} alt="craditcard" className="w-12" />
              <img src={craditcard2} alt="craditcard" className="w-12" />
            </div>
            <label className="block text-sm pb-2 font-medium">Bank Name</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter bank name" />
            
            <label className="block text-sm pb-2 font-medium">Account Holder Name</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter account holder name" />
            
            <label className="block text-sm pb-2 font-medium">Account Number/IBAN</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-6" placeholder="Enter account number or IBAN" />
            
            <div className="flex justify-between">
              <button 
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <Button 
                className="px-6 py-2 text-white rounded-lg hover:opacity-90"
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353535f0] bg-opacity-50">
            
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center relative">
            <img className="mx-auto pb-3" src={succes} alt="" />
            <h3 className="text-xl font-bold mb-4">Added Successfully</h3>
            <p className="text-gray-600">You can use your Bank Account to Withdraw from your HiveGuy Wallet</p>
            <Button 
              className="mt-4 px-6 py-2   text-white rounded-lg  "
              onClick={() => setShowSuccessDialog(false)}
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
