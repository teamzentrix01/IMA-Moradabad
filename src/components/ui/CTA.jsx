import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CTA() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/contactus');

    }
    return (
        <div className="bg-gray-100 flex items-center justify-center px-4 py-6 sm:py-8 overflow-hidden">
            <div 
                data-aos="zoom-in" 
                data-aos-duration="700"
                className="w-full lg:max-w-3xl max-w-xl bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg flex items-center justify-between gap-4 md:gap-6 hover:shadow-xl transition-all duration-300 md:flex-row flex-col text-center md:text-left"
            >
                <div className="flex-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-1.5 font-libre tracking-normal">
                        Ready to get started?
                    </h2>
                    <p className="text-white/95 text-xs sm:text-sm font-normal font-playfair tracking-wide">
                        Join IMA Moradabad or contact our dedicated administrative team.
                    </p>
                </div>
                <button
                    onClick={handleNavigation}
                    className="w-full sm:w-auto bg-white text-purple-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-gray-50 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
}