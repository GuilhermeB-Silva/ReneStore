import {useState} from 'react'
import { arr} from '../../Assets/Data/File';
import { BtnSlider} from './BtnSlide/Index';
import { DotsIndex} from '../Carousel/DotsIndex/Index'

export function Carousel() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== arr.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === arr.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(arr.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-carousel backgroundCarousel h-screen lg:h-700px">
            <div className="h-full bg-backrgba pb-86px relative">
                <div className="underline-after text-center pt-62px">
                    <h1 className="font-cormorant text-2375 text-gray8Txt font-light leading-line287625">
                        Depoimentos
                    </h1>
                </div>

                {arr.map(obj => {
                    return (
                        <div
                        key={obj.id}
                        className={`
                            ${slideIndex === obj.id ? "slide active-anim" : "slide"} 
                            flex flex-col items-center mt-53px`}
                        >
                            <img src={obj.avatar} />
                            <p className="px-4 text-center lg:px-0 lg:text-left font-cormorant font-light italic text-26 text-gray5Txt max-w-754px mx-auto">{obj.attest}</p>
                            <p className="font-cormorant font-normal text-brown text-xl">{obj.name}</p>
                            <p className="font-light text-gray9Txt text-sm text-center">{obj.company}</p>
                        </div>
                    )
                })}

                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        
                <DotsIndex values={{moveDot,slideIndex}}/>

            </div>

        </div>
    )
}