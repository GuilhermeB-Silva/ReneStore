import { NavItems } from "./NavItems.js/Index"

export function NavLinks(){
    return(
        <nav className="flex flex-col items-center lg:flex-row lg:items-end">
          
            <NavItems values={{href:'/', text:'Empresa'}}/>
            <NavItems values={{href:'/', text:'Camisaria'}}/>
            <NavItems values={{href:'/', text:'Alfaiataria'}}/>
            <NavItems values={{href:'/', text:'Depoimentos'}}/>
            <NavItems values={{href:'/', text:'Contato'}}/>
        </nav>

    )
}