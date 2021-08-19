import renee from '../../Assets/images/renee.png';
import nelsonmobile2 from '../../Assets/images/nelsonmobile2.png'
import nelsonmobile from '../../Assets/images/nelsonmobile.png';
import nelsondesktop from '../../Assets/images/nelsondesktop.png';

import cost from '../../Assets/images/cost.png';
import trust from '../../Assets/images/trust.png';
import exp from '../../Assets/images/exp.png';


import quot from '../../Assets/images/quot.png'

export function MainContent(){
    return(
        <main role="main">

            <section className="max-w-maxW mx-auto lg:grid grid-maingrid">

                <div className="underline-after flex flex-col mt-8 lg:hidden">
                    <h5 className="text-center font-cormorant text-2375 text-lightBlueTxt leading-line287625">Renee Trajar</h5>
                </div>

                <img src={renee} alt="" className="w-renee h-renee mx-auto overflow-hidden my-25px lg:mx-0 order-first lg:w-auto lg:row-start-1 lg:row-end-2 lg:w-full lg:h-full lg:my-0 lg:block"/>

                <div className="text-gray2Txt text-11875 font-light lg:col-start-2 lg:row-start-1 lg:row-end-2 lg:px-12 relative">

                    <div className="underline-after flex flex-col hidden lg:block lg:leading-none">
                        <h5 className="text-center font-cormorant text-2375 text-lightBlueTxt leading-line287625">Renee Trajar</h5>
                    </div>

                    <p className="leading-7 mb-4">
                        Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. 
                    </p>
                    <p className="leading-7">
                        Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                    </p>

                    <p className="mt-33 mb-11 text-lightBlueTxt font-cormorant italic font-normal text-26 text-center lg:text-2xl lg:mt-27px">
                    “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” 
                    </p>
                    <img src={quot} alt="" className="hidden absolute bottom-16 right-0 lg:block" />

                    <span className="block text-center mb-29 font-cormorant font-medium text-gray3Txt text-xl">Renee Trajar</span>

                    <a href="/" className="block bg-darkBlue text-gray1Txt text-center py-3.5 text-lg mb-42 lg:mb-0 lg:max-w-330px">Agenda uma visita!</a>
                </div>

            </section>

            <section className="mt-57px lg:flex w-full lg:h-360px lg:bg-backgroundgray">

                <div className="bg-backrgba relative">

                    <img src={nelsonmobile2} alt="" className="absolute h-full lg:-left-36"/>

                    <div className="relative z-1- lg:h-full ">
                        <img src={nelsonmobile} alt="Nelson customer" className="w-full cover lg:hidden"/>
                        <img src={nelsondesktop} alt="Nelson customer" className="hidden lg:block lg:w-auto lg:h-auto"/>
                    </div>
                </div>

                <div className="max-w-maxW mx-auto lg:order-first lg:flex lg:flex-col lg:justify-center lg:max-w-500px">

                    <p className="mt-41 text-gray3Txt text-1375 text-center font-light ">
                    “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. 
                    <br/>
                    O Renee tem uma equipe de mestre!”
                    </p>

                    <p className="font-cormorant font-normal text-28 text-darkBlueTxt text-center">Nelson Garey</p>
                    <p className="text-center text-base tracking-tight text-brownTxt mb-42">Advogado | Nelson Garey Advogados Associados</p>

                </div>

            </section>

            <section className="my-50px">
                <div className="hidden lg:flex lg:block max-w-maxW mx-auto justify-around">
                    <div className="flex flex-col items-center justify-between">
                        <img src={cost} alt="" />
                        <span className="uppercase font-cormorant text-lightBlueTxt font-semibold text-2xl">Qualidade</span>
                        <span className="text-lightBlueTxt font-light text-sm text-gray6Txt">Camisaria e Alfaiataria 100% artesanal.</span>
                    </div>

                    <div className="flex flex-col items-center justify-between ">
                        <img src={trust} alt="" />
                        <div className="border-r border-l border-lightgray flex flex-col items-center px-4">
                            <span className="uppercase font-cormorant text-lightBlueTxt font-semibold text-2xl">Qualidade</span>
                            <span className="text-lightBlueTxt font-light text-sm text-gray6Txt">Camisaria e Alfaiataria 100% artesanal.</span>

                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between">
                        <img src={exp} alt="" />
                        <span className="uppercase font-cormorant text-lightBlueTxt font-semibold text-2xl">Qualidade</span>
                        <span className="text-lightBlueTxt font-light text-sm text-gray6Txt">Camisaria e Alfaiataria 100% artesanal.</span>
                    </div>

                </div>

            </section>

        </main>
    )
}