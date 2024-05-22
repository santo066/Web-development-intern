import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img5 from "../../../assets/img/Vector.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



export default function Feedback() {
    return (
        <div className='md:mt-[180px] mt-[100px]'>
            <div className='text-center'>
                <h1 className='text-[44px] font-bold'>Our Clients Feedback</h1>
                <p>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
            </div>


            <div className='mt-9'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='md:mx-[400px] mx-10 text-center flex flex-col items-center'>
                            <img src={img5} alt="" />
                            <p className='mt-11'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                            <h5 className='md:text-2xl text-xl font-medium mt-4'>Mitchell Marsh</h5>
                            <p>CEO, Bexon Agency</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:mx-[400px] mx-10 text-center flex flex-col items-center'>
                            <img src={img5} alt="" />
                            <p className='mt-11'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                            <h5 className='md:text-2xl text-xl font-medium mt-4'>Mitchell Marsh</h5>
                            <p>CEO, Bexon Agency</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:mx-[400px] mx-10 text-center flex flex-col items-center'>
                            <img src={img5} alt="" />
                            <p className='mt-11'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                            <h5 className='md:text-2xl text-xl font-medium mt-4'>Mitchell Marsh</h5>
                            <p>CEO, Bexon Agency</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:mx-[400px] mx-10 text-center flex flex-col items-center'>
                            <img src={img5} alt="" />
                            <p className='mt-11'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                            <h5 className='md:text-2xl text-xl font-medium mt-4'>Mitchell Marsh</h5>
                            <p>CEO, Bexon Agency</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

        </div>
    )
}