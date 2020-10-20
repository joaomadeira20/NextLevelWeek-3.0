import React from 'react'

import '../styles/pages/landing.css'

import {Link} from 'react-router-dom'

import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../images/Logo.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="" />

                <main>
                    <h1>Leve felicidade para meu emprego na PJBank</h1>
                    <p>Visite meu github</p>
                </main>
                <div className="location">
                    <strong>Ourinhos</strong>
                    <span>São Paulo</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing