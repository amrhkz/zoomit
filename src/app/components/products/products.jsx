"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./products.css";
import Container from "../container/container";
import Content from "../container/content/content";
import Title from "../title/title";
import Link from "next/link";

// آرایه محصولات
const products = [
  {
    id: 1,
    title: "ردمی نوت 13 پرو شیائومی",
    price: "23.500.000",
    rating: 4.5,
    image: "/img/product-1.webp",
  },
  {
    id: 2,
    title: "گلکسی A55 سامسونگ",
    price: "27.200.000",
    rating: 4.6,
    image: "/img/product-2.webp",
  },
  {
    id: 3,
    title: "آیفون 13 اپل",
    price: "55.000.000",
    rating: 4.8,
    image: "/img/product-3.webp",
  },
  {
    id: 4,
    title: "نوکیا G21",
    price: "12.800.000",
    rating: 4.2,
    image: "/img/product-4.webp",
  },
  {
    id: 5,
    title: "ردمی نوت 12 شیائومی",
    price: "19.900.000",
    rating: 4.4,
    image: "/img/product-5.webp",
  },
  {
    id: 6,
    title: "گلکسی S24 اولترا",
    price: "78.000.000",
    rating: 4.9,
    image: "/img/product-6.webp",
  },
  {
    id: 7,
    title: "ردمی نوت 13 پرو شیائومی",
    price: "23.500.000",
    rating: 4.5,
    image: "/img/product-1.webp",
  },
  {
    id: 8,
    title: "گلکسی A55 سامسونگ",
    price: "27.200.000",
    rating: 4.6,
    image: "/img/product-2.webp",
  },
  {
    id: 9,
    title: "آیفون 13 اپل",
    price: "55.000.000",
    rating: 4.8,
    image: "/img/product-3.webp",
  },
  {
    id: 10,
    title: "نوکیا G21",
    price: "12.800.000",
    rating: 4.2,
    image: "/img/product-4.webp",
  },
  {
    id: 11,
    title: "ردمی نوت 12 شیائومی",
    price: "19.900.000",
    rating: 4.4,
    image: "/img/product-5.webp",
  },
  {
    id: 12,
    title: "گلکسی S24 اولترا",
    price: "78.000.000",
    rating: 4.9,
    image: "/img/product-6.webp",
  },
];

const Products = () => {
  return (
    <Container>
      <Content>
        <div className="products">
          <div className="title">
            <div className="top">
              <Title>محبوب‌ترین گوشی‌ها 📱</Title>
              <Link href={"/product/list"} className="all-products">
                مشاهده همه محصولات
                <i className="bx bx-arrow-left-stroke bx-xs"></i>
              </Link>
            </div>
            <div className="select">
              <div className="select-item active">همه برندها</div>
              <div className="select-item">سامسونگ</div>
              <div className="select-item">شیائومی</div>
              <div className="select-item">اپل</div>
              <div className="select-item">نوکیا</div>
            </div>
          </div>

          <div className="carousel">
            <Swiper
              spaceBetween={32}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link href={"/product/detail"} className="product-item">
                    <div className="top">
                      <div className="rating">
                        <i className="bx bxs-star"></i>
                        <div className="num">{product.rating}</div>
                      </div>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="price-section">
                      <div className="title">{product.title}</div>
                      <div className="price">
                        از <span>{product.price}</span> تومان
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Products;
