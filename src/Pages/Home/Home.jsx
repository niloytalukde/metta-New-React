import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import YouTubeEmbed from "./YouTubeEmbed ";
import ImageGallery from "./ImageGallery";
import Blog from "./Blog";

export default function Home() {
  return (
    <div>
      {/* Hero  */}
      <Hero />
      {/* Youtube Video  */}
      <YouTubeEmbed></YouTubeEmbed>
      {/* Banner  */}
      <Banner />
      {/* Image Gallery  */}
      <ImageGallery></ImageGallery>
      {/* Blog  */}
      <Blog></Blog>
    </div>
  );
}
