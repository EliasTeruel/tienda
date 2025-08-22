import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Categorias = () => {
  const lista = ["Novedades", "Pantalones", "Camperas", "Camisas", "Polleras", "Shorts"];

  return (
    <div className="bg-red-20 flex itemes-center justify-center">
      <Swiper
        spaceBetween={10}   // separación entre botones
        slidesPerView="auto" // que se ajuste según el ancho
        grabCursor={true}    // cursor tipo "mano" al pasar
      >
        {lista.map((e, i) => (
          <SwiperSlide key={i} className="!w-auto"> 
            <button className="bg-black rounded-sm text-white text-sm px-3">
              {e}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categorias;
