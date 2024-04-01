import React from 'react';
import CssInicio from './inicio.css';
import axios from 'axios';
import FOTO1 from "./lubricentro1.png"

const Inicio = () => {
  return (
    <div class="body">
      <h1>SOBRE NOSOTROS</h1>

      <div class="Bloque1">
        <div>

              <p>Lubricentro Fabian es una empresa argentina privada y con fines de lucro dedicada a la venta de autopartes y mantenimiento de vehículos de todo tipo de marcas.
              La apertura de la empresa se dio en el año 1986 en el mes de abril en el barrio de Olivos, gracias al creador Fabian Enrique Magello, empezando como un Trabajo “Precario”, el proyecto fue avanzando hasta formar el capital suficiente para tener su propio terreno y construir su actual infraestructura y su actual local ubicado en el barrio de la paternal.
                </p>
                <ul>

                <div class="preguntas">
                  <li>¿En qué sector se especializa el lubricentro, la venta de autopartes o el mantenimiento de los vehículos? </li>
                  <p>El lubricentro está especializado en los services, la venta de autopartes pasa a ser sector "secundario"
                    </p>
                    </div>
                    <div class="preguntas">
                  <li>¿Cuáles  son los pasos para el cobro del mantenimiento de un vehículo?</li>
                  <p>Al momento de cobrar  un auto previamente a realizar el service se hace la sumatoria de los productos (+ganancia) y la mano de obra, luego se realiza un comprobante registrando todos los productos, el valor individual y el total.</p>
                    </div>
                </ul>
                </div>

          <img src={FOTO1} alt="Logo"  class="fotoinicio"></img>
        </div>
    <div class="Bloque2">
        <p>
        En esta empresa se realizan actividades de venta de autopartes y servicio/ mantenimiento de autos tanto como revisión o arreglos aunque en sus inicios solo se dedicaban al servicio/mantenimiento de autos sin estar vinculados a ninguna empresa que le brinde los productos
        </p>
        <ul><div class="preguntas">
        <li>¿Existe algún tipo de comprobante después de finalizar el service?</li>
        <p>Si en el mismo se registra el producto dividido en su marca, código y precio, luego se coloca la sumatoria total debajo.</p>
        </div>
        <div class="preguntas">
        <li>¿Es lo mismo que al realizar una venta de autoparte? </li>
        <p>Si, se realiza el mismo procedimiento para el cobro de autopartes.</p>
          </div>
        <div class="preguntas">
        <li>¿Cuáles son los  principales proveedores? </li>
        <p>Los principales proveedores son: Shell, YPF, Castrol, Motul, Total, ELF y Distribuidores personales.</p>
          </div>
        </ul>
        </div>
    </div>
  );
};

export default Inicio;
