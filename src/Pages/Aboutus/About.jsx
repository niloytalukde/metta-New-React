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
            About
          </h2>
          <h4 className="mt-4 text-xl sm:text-2xl font-medium">
            In The Name Of Allah, The Beneficent, The Merciful
          </h4>
          <p className="text-base sm:text-lg mt-5 leading-relaxed text-justify text-gray-700">
            Islam began in the early 7th century CE in the Arabian Peninsula,
            introduced by the Prophet Muhammad (peace be upon him), who is
            regarded as the final messenger of Allah. The religion was founded
            upon the revelation of the Quran, a divine scripture believed by
            Muslims to be the literal and unaltered word of God. The Quran’s
            teachings emphasized the core principles of monotheism—the belief in
            one God—alongside the importance of compassion, justice, honesty,
            and moral conduct.
          </p>
          <p className="text-base sm:text-lg mt-4 leading-relaxed text-justify text-gray-700">
            At a time when the Arabian Peninsula was marked by tribal conflicts,
            polytheism, and social inequalities, Islam brought a transformative
            message promoting unity, equality, and social welfare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
