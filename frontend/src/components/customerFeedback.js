import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const feedbacks = [
  { name: "Alice Johnson", location: "New York, USA", review: "Amazing service! Highly recommend." },
  { name: "Michael Smith", location: "Los Angeles, USA", review: "Great experience, very professional." },
  { name: "Emily Davis", location: "Chicago, USA", review: "Loved it! Will use again for sure." },
  { name: "John Doe", location: "Houston, USA", review: "Satisfied with the quality and support." },
  { name: "Jane Williams", location: "Phoenix, USA", review: "Exceptional service and fast delivery!" },
  { name: "David Brown", location: "Philadelphia, USA", review: "Very reliable and trustworthy." },
  { name: "Sophia Miller", location: "San Antonio, USA", review: "Great prices and excellent customer support." },
  { name: "Daniel Wilson", location: "San Diego, USA", review: "Smooth process and user-friendly website." },
  { name: "Alice Johnson", location: "New York, USA", review: "Amazing service! Highly recommend." },
  { name: "Michael Smith", location: "Los Angeles, USA", review: "Great experience, very professional." },
  { name: "Emily Davis", location: "Chicago, USA", review: "Loved it! Will use again for sure." },
  { name: "John Doe", location: "Houston, USA", review: "Satisfied with the quality and support." },
];

const getRandomColor = () => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-gray-500"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const CustomerFeedbackCarousel = () => {
  return (
    <div className="w-4/5 mx-auto py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Customer Feedback</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full p-6 bg-white  rounded-lg"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center text-center p-4 border rounded-lg shadow w-[250px] h-[200px]">
            <div className={`w-16 h-16 flex items-center justify-center text-white text-xl font-bold rounded-full ${getRandomColor()}`}>
              {feedback.name.charAt(0)}
            </div>
            <p className="text-gray-700 italic mt-2">"{feedback.review}"</p>
            <p className="font-semibold text-gray-900 mt-2">- {feedback.name}</p>
            <p className="text-sm text-gray-500">{feedback.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerFeedbackCarousel;