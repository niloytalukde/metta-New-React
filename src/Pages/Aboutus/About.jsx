import React from "react";
import AboutImg from "../../assets/hero.jpg"; // Adjust the path based on your folder structure

const About = () => {
  return (
    <div className="pt-10 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutImg}
            alt="About"
            className="w-full h-[400px] sm:h-[500px] md:h-[560px] object-cover rounded"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-3">
            আমাদের সম্পর্কে
          </h2>

          <p className="text-base sm:text-lg mt-5 leading-relaxed text-justify text-gray-700">
            আমাদের চ্যানেল " মেত্তা ধাম্মা " নিবেদিত বৌদ্ধ ধর্মীয় প্ল্যাটফর্ম,
            যেখানে শান্তি, প্রজ্ঞা ও ধর্মীয় জ্ঞান ছড়িয়ে দেওয়ার লক্ষ্যে আমরা কাজ
            করে যাচ্ছি। ত্রিরত্ন– বুদ্ধ, ধর্ম ও সংঘ – এই তিন আশ্রয়ের আলোকে
            আমাদের চ্যানেল পরিচালিত হয়। আমরা বিশ্বাস করি, বৌদ্ধ শিক্ষা শুধু ধর্ম
            নয়, এটি একটি জীবনদর্শন। 🎯 আমাদের উদ্দেশ্য বুদ্ধের মহাজ্ঞান ও
            শিক্ষাকে সবার মাঝে ছড়িয়ে দেওয়া তরুণ প্রজন্মকে ধর্মীয় চেতনায়
            অনুপ্রাণিত করা অনলাইন মাধ্যমে সহজবোধ্য বুদ্ধবাণী ও ধর্মদেশনা প্রচার
            ধ্যান, সৎচিন্তা ও করুণা চর্চার জন্য মাধ্যমে নিজের প্রতি আত্নবিশ্বাস
            তৈরি করা 📚 আমাদের কার্যক্রম সাপ্তাহিক ধর্মদেশনা ভিডিও থেরবাদ ও
            মহাযান মতবাদের সমন্বয়ে আলোচনাসভা উৎসব, পূর্ণিমা ও উপোসথ দিবস উপলক্ষে
            বিশেষ অনুষ্ঠান শিক্ষামূলক লেখা, প্রশ্নোত্তর পর্ব ও ধর্মীয় কুইজ
            প্রজ্ঞাবান ভিক্ষুদের সাক্ষাৎকার বুদ্ধের দর্শনে মানবতা ধর্মকে প্রচার
            করা দেওয়া 🤝 আমাদের সাথে থাকুন আমাদের এই যাত্রা শুধু ধর্মচর্চা নয় –
            এটি অন্তরের আলোকিত পথের খোঁজ। আপনি যদি শান্তি, সমবেদনা ও প্রজ্ঞার
            অন্বেষক হয়ে থাকেন, তবে আপনি ঠিক জায়গাতেই এসেছেন। আমাদের ওয়েবসাইটের
            মাধ্যমে আপনি ধর্মের সেবা নিতে পারবেন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
