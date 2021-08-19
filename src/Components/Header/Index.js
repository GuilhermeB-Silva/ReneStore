import { MenuIcon as OpenMenu, XIcon as CloseMenuMobile} from '@heroicons/react/outline';
import logo from '../../Assets/images/whitelogo.png';
import { useState} from 'react';
import { MenuNav} from './MenuNav/Index.js';
import { Banner} from '../Banner/Index'



export function Header(){
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)

    function OpenMenuMobile(){
        setIsMenuMobileOpen(true)
    }

    function closeMenuMobile(){
        setIsMenuMobileOpen(false)

    }

    document.querySelector("body").style.overflow = isMenuMobileOpen ? 'hidden' : ''

    return(
        <header className="background relative" id="header">
           
            <div className="flex flex-col p-4 bg-linearheader lg:flex-row lg:justify-between lg:items-center">
                <OpenMenu 
                onClick={OpenMenuMobile} 
                className="w-iconMenu h-iconMenu 
                self-start text-white cursor-pointer self-end lg:hidden"
                />
               
                <img 
                src={logo} alt="Reneee logo"
                className="w-logoImg h-logoImg self-center lg:self-start ml-10"
                /> 

                <MenuNav values={{isMenuMobileOpen,OpenMenuMobile,closeMenuMobile}}/>
            </div>

            <Banner/>
            
        </header>
    )
}