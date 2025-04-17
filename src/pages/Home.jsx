import './style.css'
import Header from '../components/Header'
import Carditens from '../components/Card-itens'
import { Accordion, Span } from "@chakra-ui/react"

let Pizzas = [{
    nome: "Pizza de Mussarela",
    img: "https://bretas.vtexassets.com/arquivos/ids/187352/6571c1dd558925a4e8898c47.jpg?v=638375508167430000",
    des: "Mussarela, Molho de Tomate, oregano e milho",
    valor: 39.99
},
{
    nome: "Pizza de Calabresa",
    img: "https://bretas.vtexassets.com/arquivos/ids/187352/6571c1dd558925a4e8898c47.jpg?v=638375508167430000",
    des: "Mussarela, Molho de Tomate, oregano e milho",
    valor: 39.99
}
]
export default function Home(){
    return(   
            
        <div>
            <Header/>
            <div className='containerTE'>
                <Accordion.Root collapsible> 
                
                <Accordion.Item>
                    <Accordion.ItemTrigger>
                    <span className = "titulo">{"PIZZA"}</span>
                    <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>

                    <Accordion.ItemContent>     
                    <Accordion.ItemBody>  
                     {Pizzas.map((item, index) => (
                        <div className='accordion'>  
                        <Carditens
                        key={index}
                        nome={item.nome}
                        img={item.img}
                        des={item.des}
                        valor={item.valor}
                        />
                        </div>
                    ))}
                    </Accordion.ItemBody> 
                    </Accordion.ItemContent>
                </Accordion.Item>
                </Accordion.Root>
                  
            </div>
        </div >
    )
}

const items = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    { value: "c", title: "Third Item", text: "Some value 3..." },
  ]