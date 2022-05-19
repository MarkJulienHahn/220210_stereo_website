import React from 'react';
import { useSwiperSlide, useSwiper } from 'swiper/react';
import { useEffect } from "react";
import Image from 'next/image';

import image01 from '../../public/images/image_01.png';

const One = ( { setCategory, setPage, setLinkCategory, setLinkPage, setDescription, category, page, linkCategory, linkPage, description}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect( () => {
    { swiperSlide.isActive ? setCategory(category) : "" }
    { swiperSlide.isActive ? setPage(page) : "" }
    { swiperSlide.isActive ? setLinkCategory(linkCategory) : "" }
    { swiperSlide.isActive ? setLinkPage(linkPage) : "" }
    { swiperSlide.isActive ? setDescription(description) : "" }
  });

  return (
    <>
      <Image onClick={() => swiper.slideNext()} src={image01} placeholder="blur" priority={true}/>   
    </>
  )
};

export default One;
