
import {toast} from 'react-toastify'

const toastObj ={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
export const ErrorMsg = (msg) => {
    toast.error(msg,toastObj)
}

