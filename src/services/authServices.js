import axios from "axios";

export const loginSerivce = async (form) => {
  const resp = await axios.post(
    "https://demo-api-2.onrender.com/api/auth/login",
    form
  );
  return resp.data;
};
