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
      <main className='relative flex flex-col md:flex-row justify-between items-start w-full h-auto'>
        <section className='bg-gray-200 w-full md:w-1/5 md:mr-1'>
          <ul className='relative w-full grid grid-cols-2 md:grid-cols-1 p-1'>
            <Link href="#" className='relative col-span-1 md:col-span-2 h-8 m-1'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-black rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat1.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center'>Electronics</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 md:col-span-2 h-8 m-1'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-black rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat2.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center'>Computer</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 md:col-span-2 h-8 m-1'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-black rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat3.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center'>Accessories</p>
              </li>
            </Link>
            <Link href="#" className='relative col-span-1 md:col-span-2 h-8 m-1'>
              <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-black rounded-md overflow-hidden bg-blue-100'>
                  <div className='relative w-1/3'>
                    <Image src="/z_cat4.jpg" className='w-full object-cover' width={50} height={35}/>
                  </div>
                  <p className='relative w-2/3 text-center'>Phone</p>
              </li>
            </Link>
            <Tags title="Charging"/>
          </ul>
        </section>
        <section className='bg-gray-400 w-full md:flex-1'>
          Products
        </section>
      </main>
    </div>
  )
}
