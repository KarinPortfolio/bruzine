import React, {useState} from 'react'
import Carrinho from "../Main/carrinho.png"
import Lixeira from "../Main/lixeira.png"

function Contador() {
    const [numero, setNumero] = useState(0)
  
    function Adicionar(){
      if (numero < 20) {
      setNumero(numero + 1)
    }
  }
  
    const Subtrair = () =>{
      if(numero > 0){
      setNumero(numero -1)
    }
  }
  
    const Limpar = () =>{
      setNumero(0)
    }
  
    return (
      <>
      <section class="caixa_maior">
        <h2>{numero}</h2>
        <div class="caixa_funcionalidades">
        <button onClick ={Adicionar}>+</button>
        <button onClick={Subtrair}>-</button>
        <button onClick={Limpar}><img class="lixeira" src={Lixeira} alt="zerar contador"/></button>
        </div>
        <img class="carrinho" src={Carrinho} alt="adicionar ao carrinho"/>
        </section>
      </>
    )
   }
  export default Contador
  