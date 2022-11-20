import Head from 'next/head'
import Image from 'next/image'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
    <div className='relative w-full h-auto'>
      <Head>
        <title>ZE - Home Page</title>
        <meta name="description" content="Zerur Electronics - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='relative w-full h-auto py-2 px-6'>
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          slidesPerView={1.2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_1.jpg" layout="fill" objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_2.jpg" layout="fill" objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_3.jpg" layout="fill" objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_4.jpg" layout="fill" objectFit="cover"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <main className='relative flex flex-col justify-between items-center w-full h-auto'>
        <section className='bg-gray-200 w-full md:w-1/5 md:mr-1'>
          Sidebar
        </section>
        <section className='bg-gray-400 w-full md:flex-1'>
          Products
        </section>
      </main>
    </div>
  )
}
