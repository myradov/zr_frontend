import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

// Components
import { Tags } from '../components/Tags'
import { Product } from '../components/Product';

// Images
import cat1 from '../public/z_cat1.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Banner } from '../components/Banner';



export default function Home() {
  return (
    <div className='relative w-full h-auto mx-auto p-1'>
      <Head>
        <title>ZE - Home Page</title>
        <meta name="description" content="Zerur Electronics - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='relative w-full h-auto mx-auto bg-white'>
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          slidesPerView={1.2}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96'>
              <Image src="/elec_1.jpg" fill objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_2.jpg" fill objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_3.jpg" fill objectFit="cover"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='block w-full h-52 md:h-96 '>
              <Image src="/elec_4.jpg" fill objectFit="cover"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
     
      <main className='relative w-full h-auto flex flex-col justify-center items-center mx-auto divide-y'>
        <section className='bg-gray-50 container p-2 max-w-screen-xl mx-auto'>
          {/* Products  */} 
          <h2 className='relative py-5 text-2xl font-bold'>Categories</h2>
          <div className='relative w-full h-auto mx-auto'>
              <Swiper
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper "
                spaceBetween={30}
                // loop={true}
                // effect={"fade"}
                slidesPerView={2.5}
                breakpoints={{
                  370: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                  },
                  645: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 6.5,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                }}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className='relative w-42 h-10 md:h-16'>
                    <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
                        <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>Electronics</p>
                    </li>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          {/* <ul className='relative container mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 p-1'>
            <Tags title="Computers & Laptops"/>
            <Tags title="Phones & Tablets"/>
            <Tags title="Electronics"/>
            <Tags title="Chargers"/>
            <Tags title="Appliances"/>
          </ul> */}
        </section>
        <section className='container p-2 max-w-screen-xl mx-auto grid grid-cols-2 gap-4'>
          <Banner />
          <Banner />
        </section>
        <section className='container p-2 max-w-screen-xl mx-auto'>
          {/* Products  */} 
          <h2 className='relative py-5 text-2xl font-bold'>Products</h2>
          <ul className='relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        </section>
      </main>
    </div>
  )
}
