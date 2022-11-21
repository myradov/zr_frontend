import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

// Components
import { Tags } from '../components/Tags'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from '../components/Product';


export default function Home() {
  return (
    <div className='relative w-full h-auto mx-auto p-1'>
      <Head>
        <title>ZE - Home Page</title>
        <meta name="description" content="Zerur Electronics - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='relative w-full h-auto mx-auto bg-green-200'>
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
      <main className='relative w-full h-auto flex flex-col justify-center items-center mx-auto'>
        <section className='bg-gray-100 container p-2 max-w-screen-xl mx-auto'>
          {/* Products  */} 
          <h2 className='relative py-5 text-2xl font-bold'>Categories</h2>
          <ul className='relative container mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 p-1'>
            <Link href="#" className='relative col-span-1 h-10 md:h-12'>
              <li className='relative w-full h-full flex items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat1.jpg" className='w-full h-auto object-cover object-top' width={500} height={350}/>
                  </div>
                  <p className='relative w-2/3 text-center text-xs md:text-base font-bold'>Electronics & Computers</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 h-10 md:h-12'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat2.jpg" className='w-full object-cover' width={500} height={350}/>
                  </div>
                  <p className='relative w-2/3 text-center text-xs md:text-base font-bold'>Computer</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 h-8 md:h-12'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat3.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center font-bold'>Accessories</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 h-8 md:h-12'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat4.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center font-bold'>Phone</p>
              </li>
            </Link>
            <Tags title="Charging"/>
          </ul>
        </section>
        <section className='bg-gray-100 container p-2 max-w-screen-xl mx-auto'>
          {/* Products  */} 
          <h2 className='relative py-5 text-2xl font-bold'>Products</h2>
          <ul className='relative grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
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
