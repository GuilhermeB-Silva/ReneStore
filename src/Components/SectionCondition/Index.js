import cloth from '../../Assets/images/cloth.png'

export function SectionCondition(){

    return(
        <section className="w-full image ">
            <div className="bg-condition w-full h-full flex lg:px-12">  

                <div className="max-w-maxW mx-auto pt-60 pb-50 lg:mr-54px lg:max-w-630px">
                    <h1 className="text-33125 text-brownTxt leading-tight uppercase font-cormorant text-center">Condição Imperdível</h1>
                    <span className="font-cormorant italic text-28 text-brownTxt">Compre hoje e garanta:</span>
                    <ul className="text-gray5Txt text-xl">
                        <li className="mb-30px mt-19px">- 12% de desconto e pagamento em até <span className="font-normal text-gray4Txt">3x sem juros;</span></li>
                        <li className="mb-30px">- Até <span className="font-normal text-gray4Txt">10 meses</span> para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;</li>
                        <li className="mb-30px">- Condição muito especial por <span className="font-normal text-gray4Txt">tempo limitado</span>;</li>
                        <li className="mb-5029">- Poder presentear alguém com uma roupa de alta costura, <span className="font-normal text-gray4Txt">exclusiva.</span></li>
                    </ul>
                    <a href="/" className="w-full block bg-brown text-center text-lg text-gray4Txt py-4 rounded mt-5029 lg:max-w-330px">Garanta essa condição especial!</a>
                </div>

                <div className="hidden lg:block">
                    <img src={cloth} alt="" className="w-full h-full py-25px "/>
                </div>
            </div>
        </section>
    )
}