import keybord from '../../assets/images/keyboard.png'

export default function ProductCard() {
    return (
      <div className="  rounded-lg p-3 shadow-md w-[200px] h-[220px]">
        <img
          src={keybord}
          alt="RGB Keyboard"
          className="w-[180px] h-[90px] rounded-md"
        />
        <div className="mt-3">
          <h3 className="text-[11px] font-light leading-[17px] text-left font-poppins">
            NERV Watch 2 Pro - 2.01" Amoled Display SmartWatch
          </h3>
          <div className="flex items-center mt-1">
            <span className="text-[11px] font-medium leading-[17px] text-left font-poppins">GYD</span>
            <span className="text-sm font-bold ml-2">2,903</span>
            <span className="line-through text-gray-500 ml-2">GYD2,903</span>
            <span className="text-red-500 ml-1">-75%</span>
          </div>
          <div className="w-[180px] h-[7px] bg-gray-200 rounded-lg mt-2">
            <div className="bg-blue-600 h-[6px] rounded-lg" style={{ width: '75%' }}></div>
          </div>
          <p className="text-red-500 text-xs mt-2">100 in Stocks</p>
        </div>
      </div>
    );
  }
  