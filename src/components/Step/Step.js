import React from 'react';
import "./Step.css"
import Jeu from '../Jeu/Jeu';

export default function Step(props) {
    return (
        <div className='cadreStep'>
            <div className="jeu">
                <p>YOU PICKED</p>
                <Jeu img={props.img} class={props.class} />
            </div>


            {props.verif &&
                <div className='resultat'>
                    <span>{props.resultat}</span>
                    <button onClick={props.rejouer}>PLAY AGAIN</button>
                </div>
            }

            <div className="jeu">
                <p>THE IA PICKED</p>
                {props.verif ?
                    <Jeu img={props.imgOrdi} class={props.classOrdi} />
                    :
                    <div className="rondNoir">
                    </div>
                }
            </div>

        </div>
    );
}
