
import HeroCard from '../heroCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./slider.css"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <div className='relative h-[600px]' id='heroslider'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroCard
            title={
              <div className='flex flex-col gap-2 pt-[100px]'>
                <h1 className='text-6xl text-[#016BAF] font-bold'>Lider Service</h1>
                <p className='text-5xl text-white py-1 px-2 font-bold bg-red-500 w-fit'>20 ildir</p>
                <p className='text-4xl font-bold'>xidmətinizdəyik</p>
              </div>
            }
            img={"/banner-1 1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            title={
              <div className='flex flex-col gap-2 pt-[100px]'>
                <h1 className='text-6xl text-[#016BAF] font-bold'>Lider Service</h1>
                <p className='text-5xl text-white py-1 px-2 font-bold bg-red-500 w-fit'>20 ildir</p>
                <p className='text-4xl font-bold'>xidmətinizdəyik</p>
              </div>
            }
            img={"/banner-1 1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            title={
              <div className='flex flex-col gap-2 pt-[100px]'>
                <h1 className='text-6xl text-[#016BAF] font-bold'>Lider Service</h1>
                <p className='text-5xl text-white py-1 px-2 font-bold bg-red-500 w-fit'>20 ildir</p>
                <p className='text-4xl font-bold'>xidmətinizdəyik</p>
              </div>
            }
            img={"/banner-1 1.png"}
          />
        </SwiperSlide>
        <div className='absolute bottom-2.5 z-1 left-[50%] -translate-x-[50%] w-40 h-20 border-20 border-[#0071BB] border-b-0 rounded-t-full'>
        </div>
      </Swiper>


    </div>
  )
}

export default Slider