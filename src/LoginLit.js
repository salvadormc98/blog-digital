import { LitElement, html, css } from 'lit-element';
import './login-litelement';

export class LoginLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean }
    };
  }

  static get styles() {
    return css`
        login-litelement {
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
    `;
  }

  render() {
    return html`
        ${ this.login 
          ? html` <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #425067;
  }
  .contenedorPrincipal{
    max-width: 1000px;
    margin: 0 auto;
  }
  header{
    background-color: #eeeeee;
    width: 100%;
    height: 48px;
  }
  header nav ul li{
    list-style-type: none;
    float: left;
  }
  header nav ul li a{
    text-decoration: none;
    padding: 15px 20px 15px 20px;
    display: inline-block;
    color: #2d3646;
  }
  header nav ul li a:hover{
    background-color: #e52f6e;
    color: white;
  }
  main{
    background-color: white;
    margin-left: 217px;
    margin-top: 61px;
   
  }
  main img{
    max-width: 100%;
  
  }
  main section{
    padding: 30px;
  }
  main section p{
    text-align: justify;
    margin-bottom: 16px;
    line-height: 1.5em;
  }
  main h1{
    margin-bottom: 20px;
    font-size: 1.6em;
  }
  aside{
    position: absolute;
    top: 109px;
    left: 80;
    width: 217px;
    height: 971px;
    float: left;
    background-color:#FFC300;
    padding: 30px;
  }
  aside ul li{
    text-decoration: none;
    color: black;
  }
  aside ul li:hover{
    color: #425067;
  }
  aside ul li{
    list-style-type: none;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
  }
  aside h2{
    color: black;
    margin-bottom: 20px;
    font-size: 1.4em;
  }
  footer{
    width: 1000px;
    clear: both;
    padding: 60px;
    background-color: #e52f6e;

    height: 42px;
        bottom: 0;
        z-index: 1;
        text-align: center;
  }
  footer p{
    color: white;
    text-align: center;
    
  }
  @media screen and (max-width: 800px) {
    main{
      width:100%;
      display:block;
    }
    aside{
      width: 100%;
      display:block;
    }
    footer{
      width: 100%;
      display: block;
    }
  }
  

  </style>
</head>
<body>
  <div class="contenedorPrincipal">
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg" alt="imagen">
      <section>
        <h1>Fundamentos de progamación</h1>
        <p>Para programar tenemos que usar un lenguaje especial, que tiene sus propias palabras, reglas gramaticales, que nos permite hablar y dar instrucciones a la computadora, entender y saber las bases de esta forma de comunicarnos es lo que conocemos como los fundamentos de la programación.</p>
        <P>En Holberton contamos con el programa Foundations, con duración de 10.5 meses (tres sprint de 3.5 meses), un entrenamiento intensivo donde aprendes y practicas los fundamentos de Ciencias de Computación y desarrollo de software, que te dan conocimientos sólidos y la experiencia para despegar como programador, con la opción de hacer varias especialidades. Dos cortas: Front-End y Back-End, cada una de tres meses y medio. O si quieres puedes (en 10.5 meses más), especializarte en: Full-Stack, AR/VR, Systems Programming & Blockchain o Machine Learning.</p>
        <P>En el programa Foundations comienzas por conocer las bases de cómo funcionan las computadoras y los lenguajes de programación, para entender el sector tecnológico. </p>
        <P></p>
      </section>
    </main>
    <aside>
      <h2>Nuestros Bootcamps</h2>
      
      <ul>
        <li>Desarrollo Web</li>
        <li>DEVOPS & CLOUD COMPUTING</li>
        <li>Ciberseguridad</li>
      </ul>
    </aside>
    <footer>
      <p>Siguenos</p>
      <p>Instagram</p>
      <p>Facebook</p>
       
    </footer>
  </div>
  </body>
</html> ` 
          : html` <login-litelement @signin="${ this._hiddenLogin }"></login-litelement> ` }
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}
