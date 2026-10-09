"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  Car,
  Clock,
  MapPin,
  Calendar,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Tag,
  Headphones,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import data from "../../data/rydora.json";

const { car_rental_enquiry } = data;

export default function CarRentalEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carType: "",
    rentalDuration: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
  };

  return (
    <section className="w-full bg-[#fbfbfa] py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Heading & Enquiry Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#b84518]" />
              <span className="text-xs font-bold tracking-wider text-[#b84518] uppercase">
                {car_rental_enquiry.tagline}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-3">
              {car_rental_enquiry.main_heading_part1} <br />
              {car_rental_enquiry.main_heading_part2} <span className="text-[#b84518]">{car_rental_enquiry.main_heading_highlight}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm leading-relaxed text-[#6b7280] mb-8 max-w-lg">
              {car_rental_enquiry.description}
            </p>

            {/* Form Card */}
            <div className="bg-white border border-[#efe9e1] rounded-2xl p-6 sm:p-7 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder={car_rental_enquiry.form.name_placeholder}
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder={car_rental_enquiry.form.phone_placeholder}
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    placeholder={car_rental_enquiry.form.email_placeholder}
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                  />
                </div>

                {/* Row 3: Select Car Type & Rental Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <Car className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      required
                      value={formData.carType}
                      onChange={(e) =>
                        setFormData({ ...formData, carType: e.target.value })
                      }
                      className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg appearance-none focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] text-[#374151] cursor-pointer transition"
                    >
                      <option value="">{car_rental_enquiry.form.car_type_placeholder}</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV / Luxury SUV</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="luxury">Luxury Car</option>
                      <option value="van">Passenger Van</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#9ca3af] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      required
                      value={formData.rentalDuration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rentalDuration: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg appearance-none focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] text-[#374151] cursor-pointer transition"
                    >
                      <option value="">{car_rental_enquiry.form.duration_placeholder}</option>
                      <option value="daily">Daily Rental (1-3 Days)</option>
                      <option value="weekly">Weekly Rental</option>
                      <option value="monthly">Monthly Subscription</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#9ca3af] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Pickup Location & Drop-off Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder={car_rental_enquiry.form.pickup_placeholder}
                      required
                      value={formData.pickupLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupLocation: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder={car_rental_enquiry.form.dropoff_placeholder}
                      required
                      value={formData.dropoffLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffLocation: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                </div>

                {/* Row 5: Pickup Date & Return Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      placeholder={car_rental_enquiry.form.pickup_date_placeholder}
                      required
                      value={formData.pickupDate}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupDate: e.target.value })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      placeholder={car_rental_enquiry.form.return_date_placeholder}
                      required
                      value={formData.returnDate}
                      onChange={(e) =>
                        setFormData({ ...formData, returnDate: e.target.value })
                      }
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] transition"
                    />
                  </div>
                </div>

                {/* Row 6: Message */}
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder={car_rental_enquiry.form.message_placeholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-[13px] bg-white border border-[#e5e0d8] rounded-lg focus:outline-none focus:border-[#b84518] focus:ring-1 focus:ring-[#b84518] placeholder:text-[#9ca3af] text-[#111827] resize-none transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#b84518] hover:bg-[#a03b14] active:scale-[0.99] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <span>{car_rental_enquiry.form.submit_text}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Privacy Footer */}
              <div className="flex items-center justify-center gap-2 mt-4 text-[#6b7280]">
                <ShieldCheck className="w-4 h-4 text-[#b84518]" />
                <span className="text-[11px] font-medium text-center">
                  {car_rental_enquiry.form.privacy_text}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Car Card + Feature Bar */}
          <div className="lg:col-span-6 flex flex-col rounded-3xl overflow-hidden shadow-sm bg-[#1a1715]">
            {/* Top Car Image with Scenic Mountain / Sunset Background */}
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[360px]">
              <Image
                src={car_rental_enquiry.hero_image}
                alt={car_rental_enquiry.hero_image_alt}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Bottom 4 Feature Items Card */}
            <div className="bg-[#1b1715] border-t border-white/10 px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2.5 text-[#e5a881]">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold leading-snug">
                  {car_rental_enquiry.features[0].title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                  {car_rental_enquiry.features[0].desc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2.5 text-[#e5a881]">
                  <Tag className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold leading-snug">
                  {car_rental_enquiry.features[1].title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                  {car_rental_enquiry.features[1].desc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2.5 text-[#e5a881]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold leading-snug">
                  {car_rental_enquiry.features[2].title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                  {car_rental_enquiry.features[2].desc}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2.5 text-[#e5a881]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold leading-snug">
                  {car_rental_enquiry.features[3].title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                  {car_rental_enquiry.features[3].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
