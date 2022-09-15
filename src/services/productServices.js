import axios from "axios";

const URL = "localhost:4000/api/products";
// const URL = "https://demo-api-2.onrender.com/api/products";

export const obtenerProductosService = async () => {
  const resp = await axios.get(URL, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const crearProductoService = async (form) => {
  const resp = await axios.post(URL, form, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });

  return resp.data;
};

export const eliminarProductoService = async (id) => {
  const resp = await axios.delete(`${URL}/${id}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });

  return resp.data;
};
