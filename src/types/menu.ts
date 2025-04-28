export interface Item{
    nome: string, 
    img: string,
    des: string,
    valor: number
}

export interface MenuProps {
    titulo: string;
    img: string;
    itens: Item[];     // array do tipo correto
  }

export interface Pizza extends Item{
    
}
export interface Entrada extends Item{

}
export interface Bebida extends Item{

}
export interface Sobremesa extends Item{

}
export interface Vinho extends Item{

}