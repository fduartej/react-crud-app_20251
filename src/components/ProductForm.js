import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = {}, editing }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    status: "",
    imageURL: "",
  });

  useEffect(() => {
    if (editing) {
      setForm(initialData);
    }
  }, [initialData, editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      price: "",
      status: "",
      imageURL: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Product Price"
        required
      />
      <input
        type="text"
        name="status"
        value={form.status}
        onChange={handleChange}
        placeholder="Status"
      ></input>
      <input
        type="text"
        name="imageURL"
        value={form.imageURL}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">{editing ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
