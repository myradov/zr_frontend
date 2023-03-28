import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { EffectFade, Autoplay, Navigation, Pagination, Thumbs, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import cat1 from '../../public/z_cat1.jpg'



const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <article className='relative max-w-screen-xl mx-auto bg-white pb-2 h-auto mb-16 '>
        <section className='relative w-full h-auto flex flex-wrap items-start justify-center rounded'>
            <div className='relative w-full h-full md:w-1/2 md:sticky md:top-16'>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                className="productSwiper"
                modules={[EffectFade, Autoplay, Navigation, Pagination, Thumbs]}
                spaceBetween={30}
                loop={true}
                effect={"fade"}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <div className='block w-full aspect-square md:aspect-[4/3]'>
                    <Image src="/elec_1.jpg" fill className='object-cover'/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square md:aspect-[4/3]'>
                    <Image src="/elec_2.jpg" fill className="object-cover"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square md:aspect-[4/3]'>
                    <Image src="/elec_3.jpg" fill className="object-cover h-48 w-96"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square md:aspect-[4/3]'>
                    <Image src="/elec_4.jpg" fill className="object-cover h-48 w-96"/>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="productThumb"
              >
                <SwiperSlide>
                  <div className='block w-full aspect-square'>
                    <Image src="/elec_1.jpg" fill className="object-cover"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square'>
                    <Image src="/elec_2.jpg" fill className="object-cover aspect-square"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square'>
                    <Image src="/elec_3.jpg" fill className="object-cover aspect-square"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='block w-full aspect-square'>
                    <Image src="/elec_4.jpg" fill className="object-cover aspect-square"/>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='p-2 relative md:w-1/2 md:pl-8'>
                <h2 className='text-base md:text-lg font-medium pt-2'>Iphone 14 Pro Max</h2>
                <h3 className='font-semibold text-lg pt-3 md:text-2xl md:font-bold'>21,400 m.</h3>
                <div className='text-sm md:text-base md:font-light py-3'>
                  <p className='font-thin'>
                  {/* dangerouslySetInnerHTML={{__html: t.content}} */}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at quas illo in id totam?
                  </p>
                </div>
            </div>
        </section>
    </article>
    <div className='fixed text-center w-full md:w-1/2 h-auto bottom-0 right-0 bg-slate-50 py-4 z-50'>
      <Link href="#" className="block text-center w-52 mx-auto bg-main text-white px-2 py-2">
        Buy
      </Link>
    </div>
    </>
    
  )
}

export default Product