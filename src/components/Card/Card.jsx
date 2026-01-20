import "./Card.css"
export function Card({id, price, image, title, onDelete, onEdit}){
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Preço: {price}</p>
            <div className="card_actions">
                <button className="btn_edit" onClick={() => onEdit({id, price, image, title})}>
                    Editar
                </button>
                <button className="btn_delete" onClick={() => onDelete(id)}>
                    Excluir
                </button>
            </div>
        </div>
    )
}
