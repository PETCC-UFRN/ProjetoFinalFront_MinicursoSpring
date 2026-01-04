import "./Card.css"
export function Card({price, image, title}){
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Preço: {price}</p>
        </div>
    )
}
