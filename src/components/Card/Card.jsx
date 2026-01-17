import "./Card.css"
export function Card({id, price, image, title, onDelete}){
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Preço: {price}</p>
            <button className="btn_delete" onClick={() => onDelete(id)}>
                Excluir
            </button>
        </div>
    )
}
