import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const feedbacks = [
    { name: "Ravi Kumar", location: "Koramangala, Bangalore", review: "Amazing service! Highly recommend." },
    { name: "Priya Sharma", location: "Indiranagar, Bangalore", review: "Great experience, very professional." },
    { name: "Ananya Rao", location: "Whitefield, Bangalore", review: "Loved it! Will use again for sure." },
    { name: "Manoj Shetty", location: "Jayanagar, Bangalore", review: "Satisfied with the quality and support." },
    { name: "Sneha Patil", location: "MG Road, Bangalore", review: "Exceptional service and fast delivery!" },
    { name: "Vikram Gowda", location: "Electronic City, Bangalore", review: "Very reliable and trustworthy." },
    { name: "Karthik Reddy", location: "Rajajinagar, Bangalore", review: "Great prices and excellent customer support." },
    { name: "Meera Nair", location: "Malleshwaram, Bangalore", review: "Smooth process and user-friendly website." }
  ];

const getRandomColor = () => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-gray-500"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const MobileFeedbackCarousel = () => {
  return (
    <div className="w-full px-4 select-none py-6">
      <h2 className="text-xl font-semibold text-center mb-4">Customer Feedback</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full p-4 bg-white rounded-lg"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center text-center p-3 border rounded-lg shadow w-[160px] h-[180px]">
            <div className={`w-12 h-12 flex items-center justify-center text-white text-lg font-bold rounded-full ${getRandomColor()}`}>
              {feedback.name.charAt(0)}
            </div>
            <p className="text-gray-700 italic mt-2">"{feedback.review}"</p>
            <p className="font-semibold text-gray-900 mt-2">- {feedback.name}</p>
            <p className="text-xs text-gray-500">{feedback.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileFeedbackCarousel;
