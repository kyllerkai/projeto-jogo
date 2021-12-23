import React from 'react';
import { Helmet } from 'react-helmet';
// import './styles.scss';
import { Container } from './styles';
type LocationProps = {
  location?: any;
}
export default function PageNotFound({ location }: LocationProps) {
  return (
    <>
      <Helmet>
        <title>
          Fã-animation | Ops
          {' '}
          {location.pathname}
        </title>
      </Helmet>
      <Container>
        <div className="card">
          <div className="header">
            <h1 className="title">
              Error 404 Not Found
              {' '}
              {location.pathname}
            </h1>
          </div>
          <div className="body">
            <p>
              Parece que você seguiu um link corrompido ou
              inseriu um URL que não existe neste site.
            </p>
            <p>
              <a id="back-link" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fill="#007067"
                    d="M11.9998836,4.09370803 L8.55809517,7.43294953 C8.23531459,7.74611298 8.23531459,8.25388736 8.55809517,8.56693769 L12,11.9062921 L9.84187871,14
                   L4.24208544,8.56693751 C3.91930485,8.25388719 3.91930485,7.74611281 4.24208544,7.43294936 L9.84199531,2 L11.9998836,4.09370803 Z"
                  />
                </svg>
                Home
              </a>
            </p>
            <hr />
            <p>
              A página que está a tentar abrir não poderá ser encontrada no servidor.
              Este é um incidente do lado do cliente que significa que a página foi
              excluída ou movida e a URL não foi adequadamente alterada, ou que o
              endereço URL foi escrito incorretamente. Aguarde para mais informções!
              <br />
              entre em contato
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
