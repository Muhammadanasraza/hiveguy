<div className="relative w-full overflow-hidden">
<div className="flex transition-transform duration-500 ease-in-out"
     style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
  {images.map((image, index) => (
    <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
  ))}
</div>

{/* Navigation Buttons */}
<button onClick={goToPrevious} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
  <FiArrowLeft size={24} />
</button>
<button onClick={goToNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
  <FiArrowRight size={24} />
</button>

{/* Indicators */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
  {images.map((_, index) => (
    <div key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-500'}`} />
  ))}
</div>
</div>