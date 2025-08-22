import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Card = ({ producto }) => {

  return (
    <div className=" bg-slate-100 rounded-sm overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }} // 👈 activa los círculos
        modules={[Pagination]} // 👈 importás el módulo
      >
        {producto.imagenes?.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              alt={producto.nombre}
              className="w-full h-[200px] object-cover rounded-t-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="w-full p-2">
        <h3 className="font-medium">{producto.nombre}</h3>
        <p className="bg-red-0 -px[2px]">{producto.descripcion}</p>
        <p className="bg-red-4 -px[2px]">${producto.precio}</p>
        <div className="flex items-center bg-slate-">
          <Icon height={24} icon="material-symbols:star-rounded" className="text-yellow-300"></Icon>
          <p>5.5</p>
        </div>
        <div className="space-x-4 w-full flex justify-cente">
          <button className="w-full hover:bg-blac text-slate-300 hover:text-red-500">
            <Icon height={24} icon="icon-park-solid:like"></Icon>
          </button>
          <button className="btn-card text-center">
            <Icon height={24} icon="icons8:buy" className="text-white"></Icon>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;