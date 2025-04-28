import Carditens from '../../components/Card-itens'
import { MenuProps } from '../../types/menu';
import styles from './menu.module.css'
import { Accordion, Avatar, AvatarImage, HStack, } from "@chakra-ui/react"


export default function Menu({titulo, img, itens}: MenuProps) {

    console.log(itens)
    return(
    <div className={styles.menu}>
                <Accordion.Root collapsible defaultValue={[titulo]}> 
                <Accordion.Item value={titulo}>
                <Accordion.ItemTrigger>
                <Avatar.Root shape="rounded">
                    <AvatarImage src={img} marginLeft={"2px"}/>
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