import React, { Component } from "react";
import BlockTitle   	from '../Commons/BlockTitle.js';


class InfoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent:''
    };
    this.setMarkdownContent   = this.setMarkdownContent.bind(this);      
  }
  setMarkdownContent(content) {
     this.setState(() => ({textContent:content}));
     //markdownPrinted = content;
  }
  render() {
    return (
      <div className="InfoPanelContainer">	      
			<div className="InfoPanel">	
			<BlockTitle title='Instrucciones de Uso'/>
     
			<div className="Instrucciones">	
					<ul>
					<li>Ingrese el nuevo contador, en el panel "Agregar Contador", ingrese un nombre y presione en 'Insert'</li>
					<br/><img src="/img/instr00.png" alt="" height="23"/>
					<br/><br/>
					<li>A la izquierda, el panel 'LISTA CONTADORES' mostrar&aacute; todds los contadores persitidos en la bd en su estado actual.</li>
					<br/>
					<li>Cada contador en lista, posee 3 botones: Incrementar, Decrementar y Delete</li>
					<br/><img src="/img/instr02.png" alt="" height="23"/>
					<br/><br/>
					<li>Esta lista de contadores, puede ser ordenada oprimiendo los headers, 'Title' y 'Count'. Presione el header para alternar   ascendente y descendente</li>
					<br/><img src="/img/instr03.png" alt="" height="23"/>
					<br/><br/>
					<li>El panel 'Filtro Contadores', tiene campos de texto y numericos para filtrar por Nombre, l&iacute;mite Inferior y l&iacute;mite Superior.</li>
					<br/><img src="/img/instr04.png" alt="" height="23"/>
					<br/><br/>
					<li>Para activar y desactivar cada filtro, chequee o des marque el checkbox vinculado al campo en cuestión.</li>
					<br/>
					<li>En la parte de abajo se despliega el resumen de cuantos contadores van persistidos, y sumatoria total. </li>
					<br/><img src="/img/instr01.png" alt="" height="23"/>
					<br/><br/>					
					</ul>
					<p>&nbsp;</p>

			</div>
			</div>
      </div>
    );
  }

}
  
export default InfoPanel;