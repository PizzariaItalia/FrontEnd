import './style.css'
import Menu from '../components/menu/Menu'
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Entrada, Pizza, Bebida, Vinho, Sobremesa } from '../types/menu';

const imagens = {
    imgPizzas : "https://files.menudino.com/cardapios/39701/19.jpg",
    imgEntrada: "https://files.menudino.com/cardapios/39701/90.jpg",
    imgBebidas: "https://files.menudino.com/cardapios/39701/169.jpg",
    imgVinhos: "https://files.menudino.com/cardapios/39701/151.jpg",
    imgSobremesas: "https://files.menudino.com/cardapios/39701/25.jpg"
};



export default function Home(){

    const [entradas, setEntradas] = useState<Entrada[]>([]);
    const [pizzas, setPizzas]       = useState<Pizza[]>([]);
    const [bebidas, setBebidas]     = useState<Bebida[]>([]);
    const [vinhos, setVinhos]       = useState<Vinho[]>([]);
    const [sobremesas, setSobremesas] = useState<Sobremesa[]>([]);

    async function getApiHome() {
        const responde =  await axios.get("http://localhost:3000/menu")
        const data = responde.data
        console.log(data)
        if (data){
            setPizzas(data.Pizzas),
            setEntradas(data.Entrada),
            setBebidas(data.Bebidas),
            setVinhos(data.Vinhos),
            setSobremesas(data.Sobremesas);
        }
        else{
            console.log("Erro ao obter dados")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getApiHome();
        };
        fetchData();
    }, []);
    
    return(     
        <>
            <Header/>
            <div className='containerTE'>
                <section id="entrada">
                    <Menu titulo="ENTRADA" img={imagens.imgEntrada} itens ={entradas}/>
                </section>
                <section id="pizzas">
                    <Menu titulo="PIZZAS" img = {imagens.imgPizzas} itens={pizzas}/> 
                </section>
                <section id="bebidas">
                    <Menu titulo="BEBIDAS" img = {imagens.imgBebidas} itens={bebidas}/>    
                </section>
                <section id="vinhos">
                    <Menu titulo="VINHOS" img = {imagens.imgVinhos} itens={vinhos}/>  
                </section>
                <section id="sobremesas">
                    <Menu titulo="SOBREMESAS" img = {imagens.imgSobremesas} itens={sobremesas}/> 
                </section>  
            </div>
        </>
    )
}

