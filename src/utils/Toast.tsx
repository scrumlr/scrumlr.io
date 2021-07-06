import {toast,ToastOptions} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Toast = {
  success,
  error,
  info,
};

const toastConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
};

/**
 * Display success message via toast.
 *
 * @param text Success message.
 */
function success(text: string) {
  toast.success(text, toastConfig);
}

/**
 * Display error message via toast.
 *
 * @param text Error message.
 */
function error(text: string) {
  toast.error(text, toastConfig);
}

/**
 * Display info message via toast.
 *
 * @param text info message.
 */
function info(text: string) {
  toast.info(text, toastConfig);
}
