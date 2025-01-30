import { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaWallet, FaClipboardList, FaStar, FaHeart, FaTicketAlt, FaBoxOpen, FaTimesCircle, FaEdit, FaSave, FaRegClock } from "react-icons/fa";
import Button from "../Components/ui/button";
import MyProfile from "../Components/Dashboard/MyProfile";
import AddressCard from "../Components/Dashboard/Address";
import AddresstDialog from "../Components/ui/AddAddressDialog";
import PaymentOptions from "../Components/Dashboard/PaymentMethod";
import MyOrders from "../Components/Dashboard/MyOrders";

import airbuds from "../assets/images/airbuds.png";
import MyReview from "../Components/Dashboard/MyReview";
import MyWishList from "../Components/Dashboard/MyWishList";

const menuItems = [
  { name: "Manage My Account", icon: FaUser },
  { name: "My Profile", icon: FaUser },
  { name: "Address Book", icon: FaMapMarkerAlt },
  { name: "My Payment Options", icon: FaWallet },
  { name: "HiveGy Wallet", icon: FaWallet },
  { name: "Vouchers", icon: FaTicketAlt },
  { name: "My Orders", icon: FaClipboardList },
  { name: "My Returns", icon: FaBoxOpen },
  { name: "My Cancellations", icon: FaTimesCircle },
  { name: "My Reviews", icon: FaStar },
  { name: "My Wishlist & Followed Stores", icon: FaHeart }
];

const AccountDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(menuItems[0].name);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Cheddi Jagan12",
    email: "CheddiJagan12@gmail.com",
  });
  const [address, setAddress] = useState("Linden-Lethem Rd, Guyana");
  const [phone, setPhone] = useState("(469) 123-0000");

  const [tempProfile, setTempProfile] = useState(profile);
  const [tempAddress, setTempAddress] = useState(address);
  const [tempPhone, setTempPhone] = useState(phone);

  const handleEdit = () => {
    if (isEditing) {
      setProfile(tempProfile);
      setAddress(tempAddress);
      setPhone(tempPhone);
    }
    setIsEditing(!isEditing);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const allOrders = [
    {
      id: "187511387376006",
      date: "27 May 2024 22:59:03",
      product: "i7s Double and i12 Charging Case",
      status: "Cancelled",
      image: airbuds,
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-2">Hello, Cheddi Jagan12</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg transition-all duration-300 ${selectedTab === item.name ? "bg-pink-100 text-pink-600 font-bold " : "hover:bg-gray-100"
                  }`}
                onClick={() => setSelectedTab(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-6">
          <h1 className="text-2xl font-bold mb-6">{selectedTab}</h1>

          {/* Manage My Account*/}
          {selectedTab === "Manage My Account" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm relative">
                  <div className="absolute top-3 right-3 cursor-pointer" onClick={handleEdit}>
                    {isEditing ? <FaSave className="text-blue-500" /> : <FaEdit className="text-gray-600" />}
                  </div>
                  <h2 className="text-xl font-bold">Personal Profile</h2>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full mt-2"
                        value={tempProfile.name}
                        onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                      />
                      <input
                        type="email"
                        className="border rounded-md p-2 w-full mt-2"
                        value={tempProfile.email}
                        onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                      />
                    </>
                  ) : (
                    <>
                      <p className="mt-2">{profile.name}</p>
                      <p>{profile.email}</p>
                    </>
                  )}
                  <p className="text-pink-500 mt-4 cursor-pointer">Subscribe to our Newsletter</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="absolute top-3 right-3 cursor-pointer" onClick={handleEdit}>
                    {isEditing ? <FaSave className="text-blue-500" /> : <FaEdit className="text-gray-600" />}
                  </div>
                  <h2 className="text-xl font-bold">Address Book</h2>
                  <h2 className="text-gray-400 font-bold">DEFAULT DELIVERY ADDRESS</h2>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full mt-2"
                        value={tempAddress}
                        onChange={(e) => setTempAddress(e.target.value)}
                      />
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full mt-2"
                        value={tempPhone}
                        onChange={(e) => setTempPhone(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className="mt-2"><strong>{profile.name}</strong></p>
                      <p>{address}</p>
                      <p>{phone}</p>
                    </>
                  )}
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h2 className="font-semibold text-lg">Address Book</h2>
                  <p><strong>Cheddi Jagan</strong></p>
                  <p>Linden-Lethem Rd, Guyana</p>
                  <p>(469) 123-0000</p>
                </div>
              </div>

              <div className="py-5 bg-white rounded-xl shadow-sm mt-10">
                <h2 className="text-lg font-semibold mb-2 px-4">Recent Orders</h2>
                <div className="overflow-hidden">
                  <div className="bg-red-100 text-gray-600 font-medium flex p-3">
                    <span className="w-1/4">Order #</span>
                    <span className="w-1/4">Placed On</span>
                    <span className="w-1/4">Items</span>
                    <span className="w-1/4">Total</span>
                  </div>
                  <div className="flex items-center p-5">
                    <span className="w-2/4">187511</span>
                    <span className="w-2/4 flex items-center gap-1">
                      <FaRegClock />
                      --/-</span>
                    <span className="w-2/4">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Order Item"
                        className="w-10 h-10 rounded-md object-cover"
                      />
                    </span>
                    <span className="w-2/4 flex justify-between items-center">
                      <span>Gyd.  925</span>
                      <Button className="border border-red-400 text-red-400 px-3 py-1 rounded-lg hover:bg-red-400 hover:text-white transition">
                        Manage
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Profile */}
          {selectedTab === "My Profile" && (
            <div className="p-6 bg-white rounded-xl shadow-sm w-full lg:w-4xl relative">
              <MyProfile />
            </div>
          )}

          {/* Address Book */}
          {selectedTab === "Address Book" && (
            <div className="grid grid-cols-1 gap-6">
              <Button
                onClick={openDialog}
                className="px-4 py-2 text-white rounded-lg shadow-md transition"
              >
                Add New Address
              </Button>

              <AddresstDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
              />

              <div className="p-6 bg-white rounded-xl w-full lg:w-4xl shadow-lg">
                <AddressCard />
              </div>
            </div>
          )}

          {/* My Payment Options */}
          {selectedTab === "My Payment Options" && (
            <div className="bg-white rounded-xl">
              <PaymentOptions />
            </div>
          )}

          {/* HiveGy Wallet */}
          {selectedTab === "HiveGy Wallet" && (
            <div className="p-6 bg-white rounded-xl shadow-lg">
               
            </div>
          )}

          {/* Vouchers */}
          {selectedTab === "Vouchers" && (
            <div className="p-6 bg-white rounded-xl shadow-lg">
               
            </div>
          )}

          {/* My Orders */}
          {selectedTab === "My Orders" && (
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <MyOrders />
            </div>
          )}

          {/* My Returns */}
          {selectedTab === "My Returns" && (
            <div className="max-w-full text-center items-center rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-300">
              <div className="shadow-sm py-10">
                <h1 className="pb-5">There are no orders placed yet.</h1>
                <Button>Continue Shopping</Button>
              </div>
            </div>
          )}

          {/* My Cancellations */}
          {selectedTab === "My Cancellations" && (
            <div>
              {allOrders.map((order) => (
                <div className="shadow-sm p-2 bg-white rounded-2xl">
                  <div className="flex justify-between py-2 border-b">
                    <div className="p-3">
                      Order <span className="text-pink-600">#{order.id}</span>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    <div className="items-center flex">
                      <Button className="text-white px-4 py-2 rounded-full">Manage</Button>
                    </div>
                  </div>
                  <div className="flex justify-between lg:gap-10 max-sm:gap-2 p-5 items-center">
                    <img src={order.image} alt="Product" className="w-16 h-16 rounded" />
                    <p className="text-gray-800 mt-2">{order.product}</p>
                    <p className="text-gray-700 mt-1">Qty:1</p>
                    <button className="bg-gray-300 text-gray-700 px-2 rounded-sm">{order.status}</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* My Reviews */}
          {selectedTab === "My Reviews" && (
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <MyReview />
            </div>
          )}

          {/* My Wishlist & Followed Stores */}
          {selectedTab === "My Wishlist & Followed Stores" && (
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <MyWishList />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
