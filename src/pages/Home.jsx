import './style.css'
import Menu from '../components/menu/Menu'
import Header from '../components/Header'

let titulo = "PRINCIPAL"

export default function Home(){
    return(   
            
        <>
            <Header/>
            <div className='containerTE'>
                <Menu titulo={titulo}/> 
                 
            </div>
        </>
    )
}

