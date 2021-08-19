import { MenuIcon as OpenMenu, XIcon as CloseMenuMobile} from '@heroicons/react/outline';
import { NavLinks} from './Nav/Index';
import { Contact} from './Contact/Index'

export function MenuNav({values}){

    const { isMenuMobileOpen,OpenMenuMobile,closeMenuMobile} = values

    return(
        <>
            <div className={`
                ${isMenuMobileOpen?'':'hidden'}
                py-4 w-full h-screen absolute 
                inset-0 bg-darkBlue z-10 px-xpad flex flex-col 
                lg:block lg:flex-row lg:bg-transparent lg:h-auto lg:relative lg:w-auto`}
            >

                <CloseMenuMobile 
                    onClick={closeMenuMobile} 
                    className="w-iconMenu h-iconMenu 
                    cursor-pointer text-white relative right-0 self-end lg:hidden" 
                />

                <NavLinks/>

                <Contact/>

            </div>

       
        </>
    )
}