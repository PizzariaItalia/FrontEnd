import styles from './Card.module.css'


export default function Carditens({nome, img, des, valor}) {
    return(
        //Separação de um Produto, com titulo descrição valor e imagem
        <a href="" className={styles.card}>
            
            <div className={styles.info}>
                <h1>{nome}</h1>
                <h2>{des}</h2>
                <span>R${valor}</span>
            </div>
            <div className={styles.img}>
            <img src={img} alt={nome}
            width={90}/>
            </div>  
        </a>
    );
}

