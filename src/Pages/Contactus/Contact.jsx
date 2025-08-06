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
            📩 যোগাযোগ
          </h2>
          <p className="text-base sm:text-lg mt-5 leading-relaxed text-justify text-gray-700">
            🤝 আমাদের সাথে থাকুন আমাদের এই যাত্রা শুধু ধর্মচর্চা নয় – এটি
            অন্তরের আলোকিত পথের খোঁজ। আপনি যদি শান্তি, সমবেদনা ও প্রজ্ঞার
            অন্বেষক হয়ে থাকেন, তবে আপনি ঠিক জায়গাতেই এসেছেন। আমাদের ওয়েবসাইটের
            মাধ্যমে আপনি ধর্মের সেবা নিতে পারবেন।
          </p>

          <div className="mt-6 space-y-3 text-gray-800 text-base sm:text-lg">
            <p>
              <strong>জি মেইল:</strong> mettadhamma969@gmail.com
            </p>
            <p>
              <strong>ফোন:</strong> +880-1830113623
            </p>
            <p>
              <strong>ঠিকানা:</strong> বায়েজিদ থানা কেন্দ্রীয় শান্তিকুঞ্জ বৌদ্ধ
              বিহার, মোহাম্মদ নগর, বায়েজিদ থানা সংলগ্ন, চট্টগ্রাম
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
