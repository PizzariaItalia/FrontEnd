import Carditens from '../../components/Card-itens'
import styles from './menu.module.css'
import { Accordion, Avatar, HStack, Span } from "@chakra-ui/react"

export default function Menu({titulo, img, itens}) {
    return(
    <div className={styles.menu}>
                <Accordion.Root collapsible defaultValue={["Menu"]}> 
                <Accordion.Item value="Menu">
                <Accordion.ItemTrigger>
                <Avatar.Root shape="rounded" style={{margin: 3}}>
                <Avatar.Image src={img} />
                <Avatar.Fallback name={titulo} />
                </Avatar.Root>
                <HStack flex="1">
                {titulo}{" "}
                </HStack>  
                <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>     
                    <Accordion.ItemBody>
                    <div className={styles.conteudo}> 
                    {itens.map((item, index) => (
                        <div className={styles.item}>  
                        <Carditens
                        key={index}
                        nome={item.nome}
                        img={item.img}
                        des={item.des}
                        valor={item.valor}/>
                        </div>
                    ))}
                    </div>
            </Accordion.ItemBody> 
            </Accordion.ItemContent>
            </Accordion.Item>
            </Accordion.Root>
        </div>
        );
}