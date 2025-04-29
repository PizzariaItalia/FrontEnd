import styles from './Header.module.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header(){

    
    const navigate = useNavigate();    
    const handleRedirect = () => {
        navigate('/sobre');
        };

    const handleRedirectHome = () => {
        navigate('/');
        };

    const handleClick = () => {
        window.location.href = 'https://wa.me/5519981438835?text=Bem%20vindo%20a%20Minha%20api';
    };

    function handleScrollTo(id: string, event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 150;  // Ajuste o valor do offset conforme necessário para a altura do seu menu fixo

            window.scrollTo({
                top: element.offsetTop - offset,  // Subtrai o offset para alinhar com o topo do menu
                behavior: 'smooth',
            });
        }
        else{
            handleRedirectHome()

        }
    }

    const [menuScroll, setMenuScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {  // Ajuste esse valor para o ponto onde o menu deve se fixar
            setMenuScroll(true);
        } else {
            setMenuScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <div className={styles.main}>
    <header className={styles.Header}>
            <div className={styles.Contato}>
            <a onClick={handleClick}>
                <img src="https://i.pinimg.com/736x/ed/9f/44/ed9f4416b4e2840112eee23022d63242.jpg" alt="Contato" 
                width={60}
                height={60}
                /></a>
            </div> 
        </header> 
        <nav>
        <ul className={`${styles.Menu} ${menuScroll ? styles.fixed : ''}`}>
                    <li><a href="#" onClick={(event) => handleScrollTo('entrada', event)}>Entrada</a></li>
                    <li><a href="#" onClick={(event) => handleScrollTo('pizzas', event)}>Pizzas</a></li>
                    <li><a href="#" onClick={(event) => handleScrollTo('bebidas', event)}>Bebidas</a></li>
                    <li><a href="#" onClick={(event) => handleScrollTo('vinhos', event)}>Vinhos</a></li>
                    <li><a href="#" onClick={(event) => handleScrollTo('sobremesas', event)}>Sobremesas</a></li>
                    <li><a href="#" onClick={handleRedirect}>Sobre</a></li>
                </ul>
        </nav> 
    </div>
    );
}