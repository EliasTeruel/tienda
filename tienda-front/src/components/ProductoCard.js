import React from "react";

const ProductoCard = ({ producto }) => {
    console.log(producto);
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, width: 250, margin: 10 }}>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><b>${producto.precio}</b></p>
      <div>
        {producto.imagenes?.map((url, i) => (
          <img key={i} src={url} alt={producto.nombre} style={{ width: 80, margin: 5 }} />
        ))}
      </div>
    </div>
  );
};

export default ProductoCard;
