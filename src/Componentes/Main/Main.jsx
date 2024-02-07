import React from 'react'
import Blusa1 from './blusa1.jpg' 
import Blusa2 from './blusa2.jpg' 
import Blusa3 from './blusa3.jpg' 
import Contador from '../Contador/Contador.jsx'
import Footer from '../Footer/Footer.jsx'

function Main(){   

    return(
        <>
        <main>        
            <section class="galeria">
            <section className="item">
              <img className="blusa" src={Blusa1} alt="blusa1"/>
              <p>100% algodão</p>      
              <Contador />           
              </section>

              
            <section className="item">
              <img className="blusa" src={Blusa2} alt="blusa2"/>
              <p>100% poliéster</p>      
              <Contador />           
              </section>

             
            <section className="item">
              <img className="blusa" src={Blusa3} alt="blusa3"/>
              <p>80% viscose 20% elastano</p>      
              <Contador />           
              </section></section>

              <Footer />
          </main>    
    </>
)
}
export default Main
