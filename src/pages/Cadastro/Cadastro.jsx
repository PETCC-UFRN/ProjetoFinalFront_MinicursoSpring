import { useState } from "react"
import "./Cadastro.css"

export function Cadastro() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const newFood = {
      title,
      price: parseFloat(price),
      image
    }

    try {
      const response = await fetch("http://localhost:8080/foods/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newFood)
      })

      if (!response.ok) {
        throw new Error("Erro ao cadastrar comida")
      }

      setMessage("Comida cadastrada com sucesso!")
      setTitle("")
      setPrice("")
      setImage("")
    } catch (error) {
      setMessage("Erro ao cadastrar comida")
    }
  }

  return (
    <div className="container">
      <h1>Cadastrar nova comida</h1>

      <form onSubmit={handleSubmit}>
        <div className="formContainer">
            <div className="divInput">
          <label>Nome do prato</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="divInput">
          <label style={ {marginRight: "70px"} }>Preço</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="divInput">
          <label>Imagem (URL)</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button className="btn_default" type="submit">
          Cadastrar
        </button>
        </div>     
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}
