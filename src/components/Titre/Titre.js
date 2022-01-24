import React from 'react';
import "./Titre.css"

export default function Titre() {   
  return (
    <div className='cadreTitre'>
        <div className="titre">
            <span>PIERRE</span>
            <span>PAPIER</span>
            <span>CISEAU</span>
        </div>
        <div className="score">
            <p>SCORE</p>
            <p>12</p>
        </div>
    </div>
  );
}
