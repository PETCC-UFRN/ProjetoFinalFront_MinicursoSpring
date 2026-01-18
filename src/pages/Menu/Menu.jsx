import { useEffect, useState } from "react"
import "./Menu.css"
import { Card } from "../../components/Card/Card"
import errorImage from "../../assets/images/error.png"

export function Menu(){

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const CREDENTIALS = btoa("admin:12345");

  useEffect(() => {

      async function fetchFoods() {

        try{
          const response = await fetch("http://localhost:8080/foods/get")

          if (!response.ok){
            throw new Error("Erro ao buscar os dados na API!")
          }

          const result = await response.json()
          setData(result)
        }

        catch (err){
          setError(err.message)
        }
        finally{
          setLoading(false)
        }
      
      }

      fetchFoods()
    
    }, []
  )

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este item?")
    if (!confirmDelete) return

    try {
      const response = await fetch("http://localhost:8080/foods/delete/" + id, {
        method: "DELETE",
        headers: {
          "Authorization": "Basic " + CREDENTIALS
        }
      })

      if (!response.ok) {
        throw new Error("Erro ao deletar comida")
      }

      setData(prevData => prevData.filter(food => food.id !== id))

    } catch (err) {
      alert("Você precisa estar logado para excluir uma comida")
    }
  }

  if (loading)
    return <p className="container">Carregando cardápio...</p>

  if (error)
    return( 
      <div className="container" style={ {justifyContent:"center"} }>
        <img src={errorImage} alt="unicornioDeErro" />
        <p style={ {fontSize: "40px"} }> <b> Deu ruim pra tu {"\u{1F62D}"} </b></p>
        <p><b>Erro: {error}</b></p>
      </div>
    )
  

    return(
        <div className="container">
            <h1>Cardápio</h1>
            <div className="card-grid">
                {data?.map(foodData => 
                    <Card
                        key={foodData.id}
                        id={foodData.id}
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </div>
    )
}