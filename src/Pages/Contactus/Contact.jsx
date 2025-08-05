import React from "react";

import ContactImg from "../../assets/hero.jpg";

const Contact = () => {
  return (
    <div className="pt-10 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={ContactImg}
            alt="Contact"
            className="w-full h-[400px] sm:h-[500px] md:h-[560px] object-cover rounded"
          />
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-3">
            Contact Us
          </h2>
          <h4 className="mt-4 text-xl sm:text-2xl font-medium">
            In The Name Of Allah, The Beneficent, The Merciful
          </h4>
          <p className="text-base sm:text-lg mt-5 leading-relaxed text-justify text-gray-700">
            If you have any questions, inquiries, or would like to connect with
            us, feel free to reach out. We welcome your feedback and will get
            back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-3 text-gray-800 text-base sm:text-lg">
            <p>
              <strong>Email:</strong> contact@yourdomain.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Address:</strong> 123 Islamic Center Road, Kolkata, India
            </p>
          </div>

          {/* Gradient Button */}
          <div className="mt-8">
            <a href="mailto:contact@yourdomain.com">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
                Send Message
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
