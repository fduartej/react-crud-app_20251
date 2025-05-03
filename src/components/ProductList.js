import React from "react";

const ProductList = ({ products, onDelete, onEdit }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      {/* Encabezado */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr auto auto",
          gap: "10px",
          fontWeight: "bold",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderBottom: "2px solid #ccc",
        }}
      >
        <div>Nombre</div>
        <div>Precio</div>
        <div>Estado</div>
        <div colSpan="2">Acciones</div>
      </div>

      {/* Filas de productos */}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr auto auto",
            gap: "10px",
            padding: "10px",
            borderBottom: "1px solid #e0e0e0",
            alignItems: "center",
          }}
        >
          <div>{product.name}</div>
          <div>${product.price}</div>
          <div>{product.status}</div>
          <div>
            <button onClick={() => onEdit(product)}>Editar</button>
          </div>
          <div>
            <button onClick={() => onDelete(product.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
