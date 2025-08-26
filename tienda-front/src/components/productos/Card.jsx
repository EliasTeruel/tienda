import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Card = ({ producto }) => {

  return (
    <div className=" bg-slate-100 rounded-md overflow-hidden hover:shadow-lg  transition duration-300 ease-in-out">
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
              className="w-full h-[200px] object-cover rounded-t-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="w-full p-2 space-y-2">
        <h3 className="font-medium">{producto.nombre}</h3>
        <p className="">{producto.descripcion}</p>
        <div className="grid grid-cols-3 ">
          <p className="flex justify-start text-green-500 font-medium ">${producto.precio}</p>
          <p className="flex justify-center text-slate-400 line-through font-medium ">${producto.precio}</p>
          <div className="flex items-center justify-end bg-slate-">
            <Icon height={24} icon="material-symbols:star-rounded" className="text-yellow-300"></Icon>
            <p>5.5</p>
          </div>
        </div>
        <div className="w-full flex f gap-2">
          <button className="px-2 border-2 border-slate-300 rounded-md text-slate-300 hover-like ">
            <Icon height={20} icon="icon-park-solid:like"></Icon>
          </button>
          <button className="btn-card text-center text-white">
            Agregar al carrito
            {/* <Icon height={24} icon="icons8:buy" className="text-white"></Icon> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;