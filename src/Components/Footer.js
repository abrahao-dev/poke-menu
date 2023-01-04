import React from 'react'
import logo from "../logo-png.png";
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
            <div className="col">
                    <ul className="list-unstyled">
                        <img src={logo} alt="logo" className="logo" />
                    </ul>
                </div>

                <div className="col">
                    <h4>Nossa unidade</h4>
                    <ul className="list-unstyled">
                        <li>11 98851-2788</li>
                        <li>São Paulo, Brasil</li>
                        <li>123 São Paulo, SP</li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Horários de funcionamento</h4>
                    <ul className="list-unstyled">
                        <li>Segunda-Sábado</li>
                        <li>11:30 às 22:30</li>
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