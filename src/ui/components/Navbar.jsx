
import { useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navbarItems } from './navbarItems.json'
import './Navbar.css'




export const Navbar = () => {

    const { pathname } = useLocation();

    const navBar = useRef()

    const [navBarWidth, setNavBarWidth] = useState( 200 )

    useLayoutEffect(()=> {

        const navBarWidth =  navBar.current.getBoundingClientRect().width 

        setNavBarWidth(navBarWidth)


    } )


  return (
    <>
    <nav className="navbar-container" ref={ navBar }>

        <div className='navbar-items'>
            <Link to="/home">
                <div className="twLogoNav">
                    <i className='bx bxl-twitter'></i>
                </div>
            </Link>

            <div>
                { navbarItems.map( item => (
                    <NavLink 
                    key = { item.name }
                    to={ item.to }
                    className={({isActive}) =>
                        isActive? 'active': 'inactive' }
                    >
                    <div className="inicioNav leftItem">
                        <div>
                            {
                            <i className={pathname.includes(item.to) ? item.bxsClassname : item.bxClassname }></i>
                            }

                            <span className="leftItemText">{item.name}</span>

                        </div>
                    </div>
                </NavLink>
                
            ))}

            </div>

        </div>



    </nav>

</>
  )
}
