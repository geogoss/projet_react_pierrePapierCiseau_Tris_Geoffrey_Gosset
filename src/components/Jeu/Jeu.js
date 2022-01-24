import React from 'react';
import "./Jeu.css"

export default function Jeu(props) {
  return (
        <div onClick={ () => {

            props.jePasseAuStep()
            props.stockNombre()
            props.random()
            setTimeout(() => {
                props.choixOrdi()
                
            }, 1000);


        }}
        
        className= {props.class} >
            {props.img}
        </div>
    );
}
