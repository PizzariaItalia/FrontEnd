import styles from './Card.module.css'


export default function Carditens({nome, img, des, valor}) {
    return(
        //Separação de um Produto, com titulo descrição valor e imagem
        <div className={styles.card}>
            <div className={styles.info}>
                <h1>{nome}</h1>
                <h2>{des}</h2>
                <h2>R${valor}</h2>
            </div>
            <div className={styles.img}>
            <img src={img} alt={nome}
            width={90}
            height={90} />   
            </div>
        </div>
    );
}

