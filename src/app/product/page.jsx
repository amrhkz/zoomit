"use client"
import Banner from "../components/banner/banner";
import Category from "../components/category/category";
import Category2 from "../components/category-2/category-2";
import Ads from "../components/ads/ads";
import Products from "../components/products/products";
import Footer from "../components/footer/footer";
import Ads2 from "../components/ads/ads-2/ads-2";
import Navbar from "../components/navbar/navbar";

function page() {
  return (
    <>
      <Ads2 />
      <Navbar />
      <Banner />
      <Category />
      <Category2 />
      <Ads />
      <Products />
      <Category2 />
      <Products />
      <Products />
      <Ads />
      <Products />
      <Products />
      <Products />
      <Products />
      <Footer />
    </>
  );
}

export default page;
