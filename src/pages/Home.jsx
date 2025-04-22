import './style.css'
import Menu from '../components/menu/Menu'
import Header from '../components/Header'


 
const imagens = {
    imgPizzas : "https://media.istockphoto.com/id/901501348/pt/vetorial/slice-of-melted-cheese-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=7Zj4is26q_ybq7kcaGQL2yLUQjAd62AVwkMKss6uXtg=",
    imgEntrada: "https://www.minhareceita.com.br/app/uploads/2023/11/entradas-chique-portal-minha-receita.jpg"
};

let Pizzas = [{
    nome: "Pizza de Mussarela",
    img: "https://bretas.vtexassets.com/arquivos/ids/187352/6571c1dd558925a4e8898c47.jpg?v=638375508167430000",
    des: "Uma deliciosa pizza feita com queijo, molho de tomate, parmesão e orégano",
    valor: 39.99
},
{
    nome: "Pizza de Calabresa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlioOkjnO7gzsDznfe6aLsFhW03Wq6qHZQow&s",
    des: "Mussarela, Molho de Tomate, oregano e milho",
    valor: 39.99
}]

export default function Home(){
    return(   
            
        <>
            <Header/>
            <div className='containerTE'>
                <Menu titulo="ENTRADA" img={imagens.imgEntrada} itens ={Pizzas}/>
                <Menu titulo="PIZZAS" img = {imagens.imgPizzas} itens={Pizzas}/>    
            </div>
        </>
    )
}

