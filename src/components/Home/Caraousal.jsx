import React from 'react'
import img1 from '../../assets/caraosal-1.jpg'
import img2 from '../../assets/caraosal-2.jpg'
import img3 from '../../assets/caraosal-3.jpg'
import img4 from '../../assets/caraosal-4.jpg'
import { Carousel } from "flowbite-react";
export default function Caraousal() {
  return (
    <div className="lg:h-[32rem]  sm:h-64 xl:h-11/12 2xl:h-11/12">
      <Carousel slideInterval={2000}>
        <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/shutterstock_1445581070.jpg" alt="slide" />
        <img src={img1} alt="slide" />
        <img src={img2} alt="slide" />
        <img src={img3} alt="slide" />
        <img src={img4} alt="slide" />
      </Carousel>
    </div>
  )
}
