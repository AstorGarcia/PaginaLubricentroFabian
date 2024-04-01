import React from 'react';
import CssService from "./service.css";
import axios from 'axios';
import FOTO4 from "./lubricentro4.png"
const Service = () => {
  return (
    <div class="body">
      <h1>SERVICE</h1>
      <div class="service">
      <div class="servicetxt">
        <p>El servicio/mantenimiento de autos es el sector en el cual estamos más enfocados en Lubricentro Fabian, la mayoría de autopartes y productos se consumen y venden en la parte del service a la hora de nuestros mecánicos realizar su trabajo.
        Ofrecemos distintos tipos de pagos y hasta financiamiento de los servicios, según el precio acordado a abonar por el cliente y el lubricentro, su auto será muy bien tratado en nuestro service de alta calidad y hasta realizamos retoques sin cargo.
          </p>
      </div>

        <div class="serviceimg">

              <img src={FOTO4} alt="Logo"  class="foto"></img>
              <div class="posserv">
                  <h2>Proceso del Service</h2>
                  <ol>
                  <div class= "puntos">
                  <li class="lista">El cliente se acerca con el auto, anotan los datos y arman el presupuesto</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Si se llega a un acuerdo, se termina la operación y se queda el auto en el lubricentro.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">El cliente puede elegir entre pagar al contado o en cuotas.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Una vez realizado el/los pagos la encargada de la gestión de facturas y documentos emite recibo/s.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Esta última envía la factura y los recibos a tesorería.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Tesorería revisa el pago.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Si el pago fue realizado se verifican los documentos recibidos por el cliente.</li>
                  </div>
                  <div class= "puntos">
                  <li class="lista">Si cumplio con su pago, se lo sube al sistema. Si no, se lo contacta para solucionar el problema.</li>
                  </div>
                  </ol>
              </div>
      </div>
      </div>
    </div>
  );
};

export default Service;
