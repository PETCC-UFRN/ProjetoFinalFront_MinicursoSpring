import { useEffect, useState } from "react"
import "./Menu.css"
import { Card } from "../../components/Card/Card"
import errorImage from "../../assets/images/error.png"

export function Menu() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingFood, setEditingFood] = useState(null)

  const CREDENTIALS = sessionStorage.getItem("token");

  useEffect(() => {

    async function fetchFoods() {

      try {
        const response = await fetch("http://localhost:8080/foods/get")

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados na API!")
        }

        const result = await response.json()
        setData(result)
      }

      catch (err) {
        setError(err.message)
      }
      finally {
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

  async function handleUpdate(e) {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/foods/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + CREDENTIALS
        },
        body: JSON.stringify(editingFood)
      })
      if (!response.ok)
        throw new Error("Erro na atualização")

      const updateFood = await response.json()

      setData(prev => prev.map(f => f.id === updateFood.id ? updateFood : f))
      setEditingFood(null)
      alert("Item atualizado com sucesso!")
    }
    catch (err) {
      alert("Erro ao atualizar.")
    }
  }

  if (loading)
    return <p className="container">Carregando cardápio...</p>

  if (error)
    return (
      <div className="container" style={{ justifyContent: "center" }}>
        <img src={errorImage} alt="unicornioDeErro" />
        <p style={{ fontSize: "40px" }}> <b> Deu ruim pra tu {"\u{1F62D}"} </b></p>
        <p><b>Erro: {error}</b></p>
      </div>
    )


  return (
    <div className="container">
      <h1>Cardápio</h1>

      {editingFood && (
        <div className="edit-modal">
          <form onSubmit={handleUpdate}>
            <h3>Editando: {editingFood.title}</h3>
            <input
              type="text"
              value={editingFood.title}
              onChange={e => setEditingFood({ ...editingFood, title: e.target.value })}
            />
            <input
              type="number"
              value={editingFood.price}
              onChange={e => setEditingFood({ ...editingFood, price: parseFloat(e.target.value) })}
            />
            <input
              type="text"
              value={editingFood.image}
              onChange={e => setEditingFood({ ...editingFood, image: e.target.value })}
            />
            <button type="submit" className="btn_submit">Salvar Alterações</button>
            <button type="button" onClick={() => setEditingFood(null)}>Cancelar</button>
          </form>
        </div>
      )}

      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            key={foodData.id}
            id={foodData.id}
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
            onDelete={handleDelete}
            onEdit={(food) => setEditingFood(food)}
          />
        )}
      </div>
    </div>
  )
}
