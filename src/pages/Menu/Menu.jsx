import "./Menu.css"
import { Card } from "../../components/Card/Card"

const data = [
  {
    id: 1,
    title: "Hambúrguer",
    price: 29.90,
    image: "https://www.allrecipes.com/thmb/_OKqViGmlNaa9GV_c4cpwpwApGk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
  },
  {
    id: 2,
    title: "Pizza Margherita",
    price: 45.00,
    image: "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?s=2048x2048&w=is&k=20&c=iUzcFvd1hTa6yr_gZP_xFcOovMp7R9UfM5ik1EzV57A="
  },
  {
    id: 3,
    title: "Batata Frita",
    price: 18.50,
    image: "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=800&q=82&auto=format&fit=crop&dm=1662474181&s=70c29a2dbd0cfbac22bb3fdedf6fbd29"
  },
  {
    id: 4,
    title: "Sorvete",
    price: 5.90,
    image: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg"
  },
  {
    id: 5,
    title: "Bolo",
    price: 30.99,
    image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/beirario/media/uploads/produtos/foto/xrwupuqt/file.jpg"
  },
  {
    id: 6,
    title: "Bife Osvaldo Aranha",
    price: 20.30,
    image: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-original/2013/07/16/bifeaoswaldoaranha.jpg"
  },
  {
    id: 7,
    title: "Macarrão",
    price: 12.00,
    image: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png.webp"
  }
]


export function Menu(){
    return(
        <div className="container">
            <h1>Cardápio</h1>
            <div className="card-grid">
                {data?.map(foodData => 
                    <Card
                        key={foodData.id}
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                    />
                )}
            </div>
        </div>
    )
}