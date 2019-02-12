import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import image from '../src/conbar2.jpg';
import imageOne from '../src/conbar.jpg';
import imageTwo from '../src/conbar3.jpg';
import imageTre from '../src/conbar2.jpg';
import imageMex from '../src/bmexico.jpg';
import imageDom from '../src/bdomini.gif';
import imageBan from '../src/bandera.gif';
import imageNic from '../src/bnicaragua.png';
import imageSt from '../src/bst.png';


var images = [];

window.onload = function () {
  document.getElementById("mexico").onclick = function () {
    images = [imageMex];
  }
  document.getElementById("domini").onclick = function () {
    images = [imageDom];
  }
  document.getElementById("ban").onclick = function () {
    images = [imageBan];
  }
  document.getElementById("nica").onclick = function () {
    images = [imageNic];
  }
  document.getElementById("st").onclick = function () {
    images = [imageSt];
  }
  document.getElementById("no").onclick = function () {
    images = [imageTwo, imageTre];
  }
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="App">
        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <p>BPE S.A. de C.V. TANQUES & BOMBAS DE BAJA CALIFORNIA S.A. de C.V.</p>
        </div>

        <header className="App-header" id="home">







          <div className="box">

            <h3>
              LIDERES EN INGENIERIA VENTAS Y CONSTRUCCION DE TANQUES VITROFUSIONADOS Y SISTEMAS DE BOMBEO  EN MEXICO CENTRO AMERICA Y EL CARIBE.
            </h3>
            <br></ br>
            <a
              className="App-link"
              href="https://bpemexico.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conoce la pagina oficial
            </a>

            <br></br>

          </div>

        </header>
        <div id="box1">
          <div id='buttons'>
            <div className="banderas">
              <h3>Proyectos en:</h3>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length
                    })
                  }
                />
              )}
              <button type="button" className="lightboxOne" id="mexico" onClick={() => this.setState({ isOpen: true })}>
                <img src={imageMex} alt="bro" ></ img>
              </ button>
              <button type="button" className="lightboxOne" id="domini" onClick={() => this.setState({ isOpen: true })}>
                <img src={imageDom} alt="bro" ></ img>
              </ button>
              <button type="button" className="lightboxOne" id="ban" onClick={() => this.setState({ isOpen: true })}>
                <img src={imageBan} alt="bro" ></ img>
              </ button>
              <button type="button" className="lightboxOne" id="nica" onClick={() => this.setState({ isOpen: true })}>
                <img src={imageNic} alt="bro" ></ img>
              </ button>
              <button type="button" className="lightboxOne" id="st" onClick={() => this.setState({ isOpen: true })}>
                <img src={imageSt} alt="bro" ></ img>
              </ button>


            </div>


            <div id="pad1">

              {/* animasion de color, start */}

              <div className="container__text">




                <div>



                </div>











                <div className="titOne" >
                  <h2>Quienes somos ?</h2>
                </div>

                <div className="a">
                  <div className="b">
                    <div className="slide-bottom">
                      <img src={image} alt="foto1" />
                    </div>
                  </div>
                  <div className="c" id="news">
                    <h2>Somos distribuidores de: </h2>
                    <ul >
                      <li>Tanques empernados vitro fusionados
  
                        GLS TANKS INTERNATIONAL GMBH Y
  
                        OMERASTORE  / OMERAS GMBH</li>
                      <li>Controladores SJE RHOMBUS</li>
                      <li>Domos geodesicos de aluminio </li>
                      <li>Motores de combustion interna CLARKE
                        LISTADOS U/L APROBADOS FM</li>
                      <li>Sellador de tanques empernados MANUS </li>
                      <li>Motores electricos WEG</li>
                      <li>Bombas centrifrugas horizontales</li>
                      <li>Carcaza Bi-partida</li>
                      <li>Turbinas verticales</li>
                      <li>Flujo mixto</li>
                      <li>Engranes</li>
                      <li>Desplazamiento positivo</li>
                      <li>ANSI</li>
                      <li>Auto-cevantes</li>
                    </ul>
                    <button type="button" id="no" className="lightboxOne" onClick={() => this.setState({ isOpen: true })}>
                      Otros proyectos
                  </button>

                  </div>
                </div>
              </div>

              <div className="backgroundOne">

              </div>




              <div className="titDos">
                <p>somos distribuidores de :</p>
              </div>

              <div className="listone">



                <img src={imageOne} alt="foto1" />
                <span>
                  <ul >
                    <li>Tanques empernados vitro fusionados

                      GLS TANKS INTERNATIONAL GMBH Y

                        OMERASTORE  / OMERAS GMBH</li>
                    <li>Controladores SJE RHOMBUS</li>
                    <li>Domos geodesicos de aluminio </li>
                    <li>Motores de combustion interna CLARKE
                        LISTADOS U/L APROBADOS FM</li>
                    <li>Sellador de tanques empernados MANUS </li>
                    <li>Motores electricos WEG</li>
                    <li>Bombas centrifrugas horizontales</li>
                    <li>Carcaza Bi-partida</li>
                    <li>Turbinas verticales</li>
                    <li>Flujo mixto</li>
                    <li>Engranes</li>
                    <li>Desplazamiento positivo</li>
                    <li>ANSI</li>
                    <li>Auto-cevantes</li>
                  </ul>
                </span>

              </div>
            </div>
          </div>
        </div>
        <div className="yellow">
            
            <div className="yone">
              <div className="left">
                <h1>Desde:</h1>
                <p>2001</ p>
              </ div>
              
              <hr color="#EBDC42" width="5" size="200"></ hr>

              <div className="right">
              <h1>Proyectos:</h1>
                <p>585</ p>
              </ div>

            </div>
           

        </ div>

        <p id="contact">VENTAS.
            ventas@bpemexico.com
            salvador@bpemexico.com
            ​
            INGENIERIA 
            ​
            jorge@bpemexico.com
            anacris@ampumpsupply.us</p>

      </div>
    );
  }
}

export default App;
