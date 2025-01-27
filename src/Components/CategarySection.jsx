import png1 from '../assets/images/category/1.png'
import png2 from '../assets/images/category/2.png'
import png6 from '../assets/images/category/6.png'
import png4 from '../assets/images/category/4.png'
import bannerGif from "../assets/images/bannerGif.gif"


export default function ShopByCategory() {
    const categories = [
      { name: "Watch", image: png2, bgColor: "bg-purple-200" },
      { name: "Speaker", image: png2, bgColor: "bg-orange-200" },
      { name: "Speaker", image: png6, bgColor: "bg-yellow-200" },
      { name: "Smart phone", image: png4, bgColor: "bg-red-200" },
      { name: "Shoes", image: png4, bgColor: "bg-green-200" },
      { name: "Clothes", image: png4, bgColor: "bg-gray-200" },
    ];
  
    return (
      <div className="text-center  py-8">
        <h2 className="text-xl pl-3 text-left font-bold mb-6">Shop by Category</h2>
        <div className="grid  grid-cols-4 md:grid-cols-6 max-sm:grid-cols-2 lg:grid-cols-6 justify-between gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-30 h-30 ${category.bgColor} rounded-full flex  items-center justify-center`}
              >
                <img src={category.image} alt={category.name} className="w-20 h-20" />
              </div>
              <p className="mt-2 text-sm font-semibold">{category.name}</p>
            </div>
          ))}
        </div>

        <div className=' mt-10'>
            <img className='w-[1300px]  rounded-2xl shadow-xl' src={bannerGif} alt="" />
        </div>
      </div>
    );
  }
  