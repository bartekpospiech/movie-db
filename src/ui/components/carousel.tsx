import { Children } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={swiper => console.log(swiper)}
    modules={[Navigation, Pagination]}
  >
    {Children.map(children, (child, index) => (
      <SwiperSlide key={index}>{child}</SwiperSlide>
    ))}
  </Swiper>
)
