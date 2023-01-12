import { useState } from 'react';
import './SoonMessage.css'
import Swal from 'sweetalert2'

export const SoonMessage = ( {shows} ) => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    background: "rgb(255, 23, 131)",
    color: "white",
    iconColor: "white",
    width: "auto",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: undefined,
    title: 'SOON!'
  })

}
