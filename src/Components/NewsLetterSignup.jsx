import vector from "../assets/images/Vector.png"

const NewsletterSignup = () => {
  return (
    <div className="bg-[#321159] my-6 max-w-7xl sm:my-10 mx-4 sm:mx-auto   text-white py-6 px-4 sm:px-6 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Section - Icon and Text */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
          <div className="p-4 rounded-full flex justify-center items-center">
            <img src={vector || "/placeholder.svg"} alt="Newsletter Icon" width={80} height={80} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Sign Up for Newsletter</h2>
            <p className="text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right Section - Email Input */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full sm:w-64 px-4 py-3 bg-white rounded-lg sm:rounded-r-none text-gray-900 focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-400 text-zinc-600 px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-yellow-500 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup

