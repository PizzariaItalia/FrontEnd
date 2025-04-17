import styles from './Header.module.css'


export default function Header(){
    return(
    <>
    <div className={styles.body}>
    <header className={styles.Header}>
            <div className={styles.Contato}>
            <a href="">
                <img src="https://i.pinimg.com/736x/ed/9f/44/ed9f4416b4e2840112eee23022d63242.jpg" alt="Contato" 
                width={60}
                height={60}/></a>
            </div> 
        </header>
        <nav>
            <ul className={styles.Menu}>
                <li><a href="">Entrada</a></li>
                <li><a href="">Adicionais</a></li>
                <li><a href="">Pizzas</a></li>
                <li><a href="">Bebidas</a></li>
                <li><a href="">Vinhos</a></li>
                <li><a href="">Sobremesas</a></li>
            </ul>
        </nav>  
    </div>
    </>
    );

}