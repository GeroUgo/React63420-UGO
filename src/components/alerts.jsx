import { toast } from "react-toastify";

export const successAlert = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000, // Cierra después de 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  export const errorAlert = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000, // Cierra después de 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };