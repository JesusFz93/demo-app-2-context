import axios from "axios";

export const obtenerProductosService = async () => {
  const resp = await axios.get("https://demo-api-2.onrender.com/api/products", {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const crearProductoService = async (form) => {
  const resp = await axios.post(
    "https://demo-api-2.onrender.com/api/products",
    form,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );

  return resp.data;
};
