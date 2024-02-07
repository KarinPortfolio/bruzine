import React, {useState} from 'react'
import Blusa1 from './blusa1.jpg' 
import Blusa2 from './blusa2.jpg'
import Blusa3 from './blusa3.jpg'
import Carrinho from "./carrinho.png"

function Main(){
    const [numero, setNumero] = useState(0)
    const Adicionar =() => {
        if(numero < 10){
            setNumero(numero +1)
        }    
    }
    const Remover = () =>{
        if(numero > 0){
            setNumero(numero -1)
      }
    }
    return(
        <main>
            <section class="galeria">

            <section class="item">
            <img class="blusa" src={Blusa1} alt="blusa1"/>
            <p>100% algodão</p>
            <h3>{numero}</h3>
            <section class="controle">
            <button onClick={Adicionar}>+</button>
            <button onClick={Remover}>-</button>
                <img class="carrinho" onClick={Adicionar} src={Carrinho} alt="" />
            </section>
            </section>

            <section class="item">
            <img class="blusa" src={Blusa2} alt="blusa2"/>
            <p>100% Poliéster</p>
            <h3>{numero}</h3>
            <section class="controle">
            <button onClick={Adicionar}>+</button>
            <button onClick={Remover}>-</button>
                <img class="carrinho" onClick={Adicionar} src={Carrinho} alt="" />
            </section>
            </section>

            <section class="item">
            <img class="blusa" src={Blusa3} alt="blusa3"/>
            <p>100% Viscose</p>
            <h3>{numero}</h3>
            <section class="controle">
            <button onClick={Adicionar}>+</button>
            <button onClick={Remover}>-</button>
                <img class="carrinho" onClick={Adicionar} src={Carrinho} alt="" />
            </section>
            </section>
</section>
            <footer>Bruna Magazine @ 2024 - Todos os direitos reservados (Imagens retiradas de <a href="https://www.freepik.com/" target="_blank">https://www.freepik.com/</a>)</footer>
        </main>
        
    )
}

export default Main