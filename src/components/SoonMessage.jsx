import { useState } from 'react';
import './SoonMessage.css'

export const SoonMessage = ( params ) => {

    console.log( params )

    console.log('SoonMessage');

    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 2000);

  return (
    <div style={{display:  show? 'block' : 'none' }} className='soon-message'>Soon!</div>
  )
}
