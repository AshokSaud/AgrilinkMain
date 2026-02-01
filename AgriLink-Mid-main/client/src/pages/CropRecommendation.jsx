import React from 'react'; // No need for useState or useEffect if no countdown

const CropRecommendation = () => {
  return (
    // The height and flex classes remain for full-page centering
    <div className="min-h-160 flex-grow flex items-center justify-center bg-gray-100 text-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Available Soon!</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We're diligently preparing something great for you. Please check back shortly!
        </p>
        {/* The spinner remains */}
        <div className="w-16 h-16 border-4 border-t-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}

export default CropRecommendation;