import logofooter from '../../Assets/images/logofooter.png';
import { ChevronUpIcon}  from '@heroicons/react/outline'

export function Footer(){


    return(
        <footer className="relative mt-28px">

            <div className="max-w-maxW relative mx-auto">

                <div className="max-w-max75% mx-auto flex flex-col text-center lg:grid lg:grid-rows-rows3 lg:pb-8">

                    <img src={logofooter} alt="renee logo" className="w-138px mx-auto lg:row-start-1"/>
                    <span className="font-poppins text-gray7Txt text-sm lg:row-start-2">CNPJ:04.487.685/0001-01</span>
                    <span className="text-gray2Txt text-sm font-light font-poppins py-4 lg:row-start-2 lg:py-0"
                    > Copyright: 2021 © Renee Trajar Todos os direitos reservados.</span>
                    <a href="#header" className="px-13px py-3 top-1/2 absolute right-0 shadow-boxbutton rounded-lg">
                        <ChevronUpIcon className="w-4"/>
                    </a>

                </div>

            </div>
            
        </footer>
    )
}