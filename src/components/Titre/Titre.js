import React from 'react';
import "./Titre.css"

export default function Titre(props) {
  return (
    <div className='cadreTitre'>
      <div className="titre">
        <span>PIERRE</span>
        <span>PAPIER</span>
        <span>CISEAU</span>
      </div>
      <div onClick={props.reset} className='topScore'>
        <div className="score">
          <p>SCORE</p>
          <p>JOUEUR</p>
          <p>{props.scoreJoueur}</p>
        </div>
        <div className="score">
          <p>SCORE</p>
          <p>ORDINATEUR</p>
          <p>{props.scoreOrdi}</p>
        </div>

      </div>
    </div>
  );
}
