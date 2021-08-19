export function NavItems({values}){

    const { href,text} = values


    return(
        <a href={href} className="uppercase block w-full text-center text-26 text-brownTxt mb-43px font-light md:text-gray9Txt lg:text-base lg:mb-0 lg:ml-4 hover:text-gray8Txt transition duration-200">{text}</a>
    )
}