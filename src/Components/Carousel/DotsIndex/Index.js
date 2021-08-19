import { arr} from '../../../Assets/Data/File'

export function DotsIndex({values}){

    const { moveDot,slideIndex} = values

    return(

        <div className="container-dots">
        {arr.map(item => (
            <div 
            onClick={() => moveDot(item.id)}
            className={slideIndex === item.id ? "dot active" : "dot"}
            >   </div>
        ))}
    </div>

    )
}