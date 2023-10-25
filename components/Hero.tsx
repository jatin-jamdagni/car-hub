"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-2 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless bookinig
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container border-2 border-pink-400">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero"
            height={1595}
            width={2696}
            className="object-contain absolute top-48"
          />
        </div>
        <div className="hero__image-overlay border-2 border-green-400" />
      </div>
    </div>
  );
};

export default Hero;
