
import React, { Component } from 'react'
import '../../App.css';
import { aku1 } from '../../Assets/Images/index';
import Particles from 'react-particles-js';

export default class Home extends Component {
    render() {
        return (
            <>

                <div className="mainContainer" id="particles-js" >

                    <div className="header" id="overlay">
                        <div className="logoName">
                            <div className="containerLogo">
                                <h1>Biodata_</h1>
                                <h3>ku</h3>
                            </div>
                        </div>

                        <div className="navigation">
                            <a href="/">Home</a>
                            <a href="/">Portofolio</a>
                            <a href="/">Resume</a>
                            <a href="/">Contact</a>
                        </div>
                    </div>

                    <div className="konten">

                        <div className="k1">
                            <div>
                                Hello..
                </div>
                        </div>
                        <div className="foto_aku">
                            <img src={aku1} />

                        </div>
                    </div>

                    <div className="konten1">

                        <div className="isi">
                            <p1>
                                Perkenalkan saya adalah Bagus Miftah Rizqullah saya adalah seorang programmer baru yang sangat ceria
                                dan
                                rajin menabung..
                            </p1>
                        </div>


                        <div className="button">
                            <button>yuk saling mengenal !</button>
                        </div>

                    </div>
                </div>
                <div>
                    <Particles params={{
                        particles: {
                            number: {
                                value: 70,
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                }
                            },
                        },
                    }} />
                </div>
            </>
        )
    }
}
