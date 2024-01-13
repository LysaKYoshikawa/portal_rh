import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import './CardComponent.css'
import { useNavigate } from "react-router-dom";

const CardComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="container custom-container d-flex justify-content-center align-items-center ">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card card mx-auto text-center">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/lysa-logo.png'} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Adicionar um novo Candidato</h5>
                        <p className="card-text">Formulario para adicionar um novo candidato.</p>
                        <a className="btn btn-secondary" onClick={() => navigate("/add")} >Adicionar Candidato</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    
                    <div className="card card mx-auto text-center">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/lysa-logo.png'} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Banco de Talentos</h5>
                        <p className="card-text">Lista do banco de talendos.</p>
                        <a className="btn btn-secondary" onClick={() => navigate("/show")}>Lista de cadastro</a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        

    )
};

export default CardComponent;


    
