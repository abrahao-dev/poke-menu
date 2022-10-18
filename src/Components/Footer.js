import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Primeira coluna</h4>
                    <ul className="list-unstyled">
                        <li>11 98851-2788</li>
                        <li>São Paulo, Brasil</li>
                        <li>123 Pedra Grande, SP</li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Segunda coluna</h4>
                    <ul className="list-unstyled">
                        <li>11 98851-2788</li>
                        <li>São Paulo, Brasil</li>
                        <li>123 Pedra Grande, SP</li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Poke</h4>
                    <ul className="list-unstyled">
                        <li>O Poke custo benefício mais gostoso que você já viu!</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Matheus Abrahão | Todos os direitos reservados | Termos de Serviço | Privacidade
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer