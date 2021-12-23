import React from 'react';

import BNAposter from './BNA_poster.jpg';

export default function Items() {
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={BNAposter} alt="BNA" />
            <h2 className="t">BNA Brand New Animal</h2>
            <p className="t2">BNA Brand New Animal</p>
            <p className="type">Açao, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              Transformada em garota-guaxinim, Michiru busca refúgio e respostas com
              ajuda do lobo-humano Shirou na zona especial de Animália.
              {' '}
            </p>
            <p>
              <b>Ano de lançamento</b>
              : 2020
            </p>
          </div>
        </div>
        <div className="blur_back bright_back" />
      </div>
    </>
  );
}
