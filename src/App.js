import React, { useState } from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import './App.css';

const BookingCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const service = {
    name: "Professional Photography Session",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop&crop=center",
    provider: "Capture Studio",
    price: 200,
    originalPrice: 250,
    rating: 4.9,
    reviews: 156,
    duration: "2 hours",
    location: "Studio District",
    capacity: "1-6 people",
    discount: "20% OFF"
  };

  const handleBookNow = () => {
    alert(`Booking ${service.name} for $${service.price}!`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div 
        className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out transform max-w-sm w-full ${
          isHovered ? 'shadow-2xl scale-105' : 'shadow-lg'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          {service.discount}
        </div>

        {/* Service Image */}
        <div className="relative overflow-hidden">
          <img 
            src={service.image}
            alt={service.name}
            className={`w-full h-48 object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Service Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {service.name}
          </h3>

          {/* Provider */}
          <p className="text-gray-600 mb-3 flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            {service.provider}
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium text-gray-700">
                {service.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({service.reviews} reviews)
            </span>
          </div>

          {/* Service Details */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {service.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {service.capacity}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ${service.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${service.originalPrice}
              </span>
            </div>
            <span className="text-sm text-gray-600">per session</span>
          </div>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform ${
              isHovered 
                ? 'shadow-lg translate-y-[-2px] from-purple-700 to-blue-700' 
                : 'shadow-md'
            } hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300`}
          >
            Book Now
          </button>
        </div>

        {/* Animated Border Effect */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 ${
          isHovered ? 'border-purple-200' : ''
        }`} />
      </div>
    </div>
  );
};

export default BookingCard;