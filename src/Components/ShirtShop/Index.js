
import camisaria from '../../Assets/images/camisaria.png'
import alfaiataria from '../../Assets/images/alfaiataria.png'

export function ShirtShop(){
    return(
        
        <section >
          <div className="max-w-maxW mx-auto mt-68.23px">
            <div >
              <div className="lg:flex items-center" >
                <img src={camisaria} alt="" className="w-full lg:max-w-530px"/>
                <div className="lg:flex lg:flex-col lg:border border-gray-200 lg:px-8 flex-grow items-center lg:py-4">
                  <h1 className="font-cormorant text-33125 uppercase text-darkBlueTxt lg:leading-none">Camisaria</h1>
                  <span className="font-normal text-gray5Txt uppercase">- confeccionadas artesanalmente</span>
                  <ul className="list-disc border-b border-grayBorder lg:border-none font-cormorant text-2xl list-inside text-gray6Txt font-normal py-8 lg:py-4">
                    <li>100% Algodão</li>
                    <li>Monograma</li>
                    <li>Slim</li>
                    <li>Nacionais e Importados</li>
                    <li>Tradicionais e Exportivas</li>
                    <li>Casamentos</li>
                  </ul>
                  <a href="/" className="bg-darkBlue w-full block py-3.5 text-lg font-light text-center text-gray1Txt lg:max-w-330px">Quero um orçamento</a>
                </div>
              </div>
            </div>

            <div className="mt-46px ">
              <div className="lg:flex lg:items-center lg:justify-between">
                <img src={alfaiataria} alt="logo" className="w-full order-last lg:max-w-530px lg:self-end" />
                <div className="lg:border border-gray-200 lg:flex-grow lg:items-center lg:flex lg:flex-col lg:py-4">
                  <h1 className="font-cormorant text-33125 uppercase text-darkBlueTxt lg:leading-none">Alfaiataria</h1>
                  <span className="font-normal text-gray5Txt uppercase">totalmente  feito a mão  sob medida</span>

                  <ul className="list-disc border-b-8 border-gray-50 font-cormorant text-2xl list-inside text-gray6Txt font-normal py-8 lg:py-4">
                    <li>Fio Super 120 e 130</li>
                    <li>Lã fria Australiana</li>
                    <li>Botões Importados</li>
                    <li>Ternos e Calças</li>
                    <li>Paletós e Smokings</li>
                    <li>Sociais e Esportivos</li>
                  </ul>
                  <a href="/" className="bg-darkBlue w-full block py-3.5 text-lg font-light text-center text-gray1Txt lg:max-w-330px">Quero um orçamento</a>
                </div>
              </div>

            </div>

          </div>

        </section>
    )
}