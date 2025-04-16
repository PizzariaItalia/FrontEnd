
export default function Carditens({nome, img, des, valor}) {
    return(
        <div className="card">
            <div className="info">
                <h1>{nome}</h1>
                <h2>{des}</h2>
                <h2>{valor}</h2>
            </div>
            <img src={img} alt={nome}
            width={30}
            height={30} />   
        </div>
    );
}

