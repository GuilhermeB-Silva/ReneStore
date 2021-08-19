import whatsapp from '../../Assets/images/whatsapp.png'

export function Banner(){

    return(

    <div className="h-banner relative lg:h-auto">

        <div className="max-w-maxW mx-auto lg:w-40% lg:mt-87.52px lg:mx-0 lg:ml-93px lg:mb-50px">

          <div className="flex flex-col">

            <p className="font-playFair text-blue-200 italic text-26 text-brownTxt leading-none">Elegante é ter um </p>

            <p className="font-playFair text-7xl text-dark2BlueTxt uppercase text-center">Alfaiate</p>

            <p className="font-playFair italic text-26 text-brownTxt self-end leading-none mr-2"> para chamar de seu.</p>

          </div>

          <div className="mt-146 lg:mt-66px">
            <p className="text-gray1Txt text-1375 leading-line19525 font-light uppercase">
            Compre HOJE, <span className="font-semibold" >PAGUE EM ATÉ 3X COM 12% DE DESCONTO</span> E TENHA 10 MESES PARA CONFECCIONAR!</p>
          </div>

          <button className="uppercase w-full bg-darkBlue py-3.5 text-gray1Txt mt-41 font-light text-lg lg:mb-50px"
          >Faça já um Orçamento</button>

        </div>
        
        <img src={whatsapp} alt="whatsapp logo" className="absolute right-4 bottom-72 sm:bottom-44 lg:-bottom-8"/>
    </div>
    )
}