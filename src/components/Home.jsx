import motion from 'framer-motion'

function Home(){
    return(
        <div>
        <ul className="ul_home">
            <li>
                <div class = "chama">
                <p>Bem vindos,</p>
                <h1>Eu sou <span>Rafael Lima</span> </h1>
                <p>Apaixonado por ciência e novas descobertas, procuro me capacitar cada vez mais em busca de aprimoramento constante.</p>
                <p>HTML | CSS | React.js | JavaScript | C | Java | Python</p>
                <p><span>Engenharia de Computação - CEFET-MG</span></p>

                </div>
            </li>
            <li>
                <div className="img">
                    <img src="https://rafaells1.github.io/pw_tp1/codeimage.webp" alt="teste" />
                    
                </div>
            </li>
            
            
            
    </ul>
    </div>
       )
}

export default Home