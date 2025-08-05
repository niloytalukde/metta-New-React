import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Shared/Header";
import Blog from "../Pages/Blog/Blog";
import News from "../Pages/News/News";
import About from "../Pages/Aboutus/About";
import Contact from "../Pages/Contactus/Contact";
import Footer from "../Shared/Footer";
import BlogDetailsPage from "../Pages/Blog/BlogDetailsPage";

export default function Router() {
  return (
    <div>
      <Header></Header>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<BlogDetailsPage />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}
