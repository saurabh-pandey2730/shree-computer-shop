// import { Header, Hero } from "../components";
import Header from './Header'
import Hero from './Hero'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade} from 'swiper/modules';
import { data } from "./data";

const HomeNav = () => {
  return (
   <Swiper
    spaceBetween={30}
    speed={3000}
    autoplay={{delay: 1500, disableOnInteraction: false}}
    effect={"fade"}
    fadeEffect={{crossFade: true}}
    modules={[Autoplay, EffectFade]}
    className="mySwiper"
   >
      {data.map(({id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img}) => (
        <SwiperSlide key={id} style={{backgroundColor: `${colorLite}`}} className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-4 md:pt-8">
          <Header colorDeep={colorDeep}/>
          <Hero 
            colorDeep={colorDeep}
            mainText={mainText}
            subText={subText}
            shadow={shadow}
            mobileShadow={mobileShadow}
            img={img}
          />
        </SwiperSlide>
      ))}
   </Swiper>
  )
}

export default HomeNav