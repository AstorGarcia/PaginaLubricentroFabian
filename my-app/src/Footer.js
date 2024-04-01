import React from 'react';
import CssFooter from "./Footer.css"
import {Link} from "react-router-dom";
  import ICON1 from"./iconosfooter/facebook.png";
  import ICON2 from"./iconosfooter/twitter.png";
  import ICON3 from"./iconosfooter/Instagram.png";
  import ICON4 from"./iconosfooter/google.png";
  import ICON5 from"./iconosfooter/linkedin.png";
  import ICON6 from"./iconosfooter/github.png";
  import ICON7 from"./iconosfooter/telegram.png";
  import ICON8 from"./iconosfooter/youtube.png";


const Footer = () => {
  return (
    <div className="footer">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 fila">
                <h5 className="text-uppercase">Lubricentro Fabian</h5>
                <p>Lubricentro Fabian es una empresa argentina privada y con fines de lucro dedicada a la venta de autopartes y mantenimiento de vehículos de todo tipo de marcas.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0 fila"/>

            <div className="col-md-3 mb-md-0 mb-3">

                <ul className="list-unstyled">
                    <li><img src={ICON1} alt="Logo"></img><a href="https://es-la.facebook.com">Facebook</a></li>
                    <li><img src={ICON2} alt="Logo"></img><a href="https://twitter.com">Twitter</a></li>
                    <li><img src={ICON3} alt="Logo"></img><a href="https://www.instagram.com">Instagram</a></li>
                    <li><img src={ICON4} alt="Logo"></img><a href="https://www.google.com">Google</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 fila">

                <ul className="list-unstyled">
                    <li><img src={ICON5} alt="Logo"></img><a href="https://ar.linkedin.com">Linkedin</a></li>
                      <li><img src={ICON6} alt="Logo"></img><a href="https://github.com/AstorGarcia/ProyectoLF/tree/master">Github</a></li>
                    <li><img src={ICON7} alt="Logo"></img><a href="https://telegram.org">Telegram</a></li>
                    <li><img src={ICON8} alt="Logo"></img><a href="https://www.youtube.com  ">Youtube</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <Link class="nav-link active  btnmio" aria-current="page" to="/" >Lubricentro Fabian</Link>
    </div>

    </div>
  );
};

export default Footer;
