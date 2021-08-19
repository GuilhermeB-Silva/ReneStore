export function Contact(){

    return(
        <section>
            <div className="max-w-maxW mx-auto border-b-2 border-brown lg:grid lg:grid-cols-3 lg:grid-rows3 pt-49px gap-4">
                
                <div className="underline-after flex flex-col lg:col-start-1 lg:col-end-4">
                    <h5 className="text-center font-cormorant text-2375 text-lightBlueTxt leading-line287625">Contato</h5>
                </div>

                <form className="flex flex-col py-39px lg:py-8 lg:row-start-2 lg:col-start-2 lg:col-end-4">
                    <input type="text" placeholder='Nome' className="py-py13 px-3 border border-blueBorder rounded" />

                    <input type="email" placeholder='E-mail' className="py-py13 px-3 border border-blueBorder rounded my-18px" />

                    <input type="textarea" placeholder='Mensagem' className="py-py13 px-3 border border-blueBorder rounded "/>

                    <button type="submit" className="py-3.5 bg-darkBlue text-18px text-gray1Txt font-light mt-18px">Enviar Mensagem</button>
                </form>

                <div className="text-center lg:py-8 mb-30px lg:col-start-1 lg:col-end-2 lg:row-start-2">

                    <div className="flex flex-col lg:items-start">
                        <span className="text-lightBlueTxt font-light text-lg">TELEFONES</span>
                        <span className="text-lg text-gray3Txt font-light">+55 (11) 3088-0757</span>
                    </div>

                    <div className="flex flex-col mt-23px mb-43px lg:items-start">
                        <span className="text-lightBlueTxt font-light text-lg">E-MAIL</span>  
                        <span className="text-lg text-gray3Txt font-light">renee@reneetrajar.com.br</span>
                    </div>

                    <div className="flex flex-col lg:items-start">
                        <span className="text-lightBlueTxt font-light text-lg mb-2.5 lg:tracking-tight">ATENDIMENTO PERSONALIZADO</span>  
                        <a href="/" className="w-210px block mx-auto py-3.5 border-2 inline border-blueBorder px-59px lg:w-full">Clique aqui!</a>
                    </div>
                </div>

            </div>
      </section>
    )
}