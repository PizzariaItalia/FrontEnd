import Carditens from '../../components/Card-itens'
import { Accordion } from "@chakra-ui/react"
import styles from './menu.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

let Pizzas = [{
    nome: "Pizza de Mussarela",
    img: "https://bretas.vtexassets.com/arquivos/ids/187352/6571c1dd558925a4e8898c47.jpg?v=638375508167430000",
    des: "Mussarela, Molho de Tomate, oregano e milho",
    valor: 39.99
},
{
    nome: "Pizza de Calabresa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlioOkjnO7gzsDznfe6aLsFhW03Wq6qHZQow&s",
    des: "Mussarela, Molho de Tomate, oregano e milho",
    valor: 39.99
}]

export default function Menu({titulo}) {
    return(
    <div className={styles.card}>
                <Accordion.Root collapsible> 
                <Accordion.Item>
                <Accordion.ItemTrigger style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }} onClick={() => setIsExpanded(!isExpanded)}>
                <span className = {styles.titulo}>{titulo}</span>
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </Accordion.ItemTrigger>

                <Accordion.ItemContent>     
                    <Accordion.ItemBody>  
                    {Pizzas.map((item, index) => (
                        <div className={styles.item}>  
                        <Carditens
                        key={index}
                        nome={item.nome}
                        img={item.img}
                        des={item.des}
                        valor={item.valor}/>
                        </div>
                    ))}
            </Accordion.ItemBody> 
            </Accordion.ItemContent>
            </Accordion.Item>
            </Accordion.Root>
        </div>
        );
}