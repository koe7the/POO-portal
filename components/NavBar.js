const template = document.createElement("template");

template.innerHTML = `
  <style>
    .navbar_container{
      text-align: center;
      background-color: white;
      border-left: 3px solid  #5656fb;
      border-right: 3px solid  #5656fb;
      border-bottom: 3px solid  #5656fb;
      padding: 1rem 1rem ;
      min-width: 950px;    
    }

    #title_anchor{
      width: max-content;
      text-decoration: none;
    }

    #navbar_title{
      display: inline;

      color: #5656fb;
      margin: 0.8rem auto;
      width: max-content;
    }

    #navbar_title:hover{
      color: #000;
      text-decoration: 2.5px underline;
    }
    
    .navbar_anchors{
      display: flex;
      justify-content: center;
      text-align: left;
    }

    #column{
      display:flex;
      flex-direction: column;
    }

    #column li{
      margin: .3rem 0;
    }

    #topic_link{
      width: max-content;
      height: max-content;

      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 600;
      
      color: #5656fb;
    }

    #topic_link:hover{
      text-decoration: 2.5px underline;
      color: #000;
    }
  </style>

  <div class="navbar_container">

    <a id="title_anchor" href="../index.html"><h1 id="navbar_title">Inicio</h1></a>

    <div class="navbar_anchors">
      <ul id="column">
        <li><a id="topic_link" href="./ParadigmaDeProgramacion.html">Paradigma de progamación</a></li>
        <li><a id="topic_link" href="./Abstraccion.html">Abstracción</a></li>
        <li><a id="topic_link" href="./DefinicionEHistoriaPoo.html">Definición e historia de POO</a></li>
      </ul>

      <ul id="column">
        <li><a id="topic_link" href="./ClasesYObjetos.html">Clases y objetos</a></li>
        <li><a id="topic_link" href="./VentajasDePoo.html">Ventajas del uso de POO</a></li>
        <li><a id="topic_link" href="./LaModularizacion.html">La modularización</a></li>
      </ul>

      <ul id="column"> 
        <li><a id="topic_link" href="./Encapsulacion.html">Encapsulación de objetos</a></li> 
        <li><a id="topic_link" href="./HerenciaJerarquiaComposicion.html">La herencia, jerarquía y composición</a></li> 
        <li><a id="topic_link" href="./Polimorfismo.html">El polimorfismo</a></li> 
      </ul>
      
    </div>
  </div>
`;
class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("navigation-bar", NavBar);
