import React from 'react';
import CssProductos from './productos.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Producto1 from "./productosimg/embudoflexible.webp"
import Producto2 from "./productosimg/Extractor Tapon.webp"
import Producto3 from "./productosimg/pinzadegomero.webp"
import Producto4 from "./productosimg/bombaaceite.webp"
import Producto5 from "./productosimg/restauradorfaros.webp"
import Producto6 from "./productosimg/Destrabacinturon.webp"





const Productos = () => {
  return (
    <div class="body">
              <h1>MARCAS Y PRODUCTOS QUE OFRECEMOS</h1>
    <div class="cards">
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto1} />
      <Card.Body>
        <Card.Title>Embudo Flexible Reforzado</Card.Title>
        <Card.Text>
      Embudo diseñado para permitir un vaciado rápido de aceites y otros fluidos sin desbordamiento ni salpicaduras.
        </Card.Text>
        <Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>

        $6.576</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto2} />
      <Card.Body>
        <Card.Title>Extractor Tapon De Carter Imantada</Card.Title>
        <Card.Text>
          Esta herramienta actúa a distancia y evita que el tapón se caiga en la bandeja o depósito de drenaje, al sujetar el tornillo y normalmente la arandela todo el tiempo en el imán.
        </Card.Text>
        <Card.Text>$
        6.576</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white"}}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto3} />
      <Card.Body>
        <Card.Title>Pinza Gomero Cubierta Multi Proposito</Card.Title>
        <Card.Text>
          Se utiliza para colocar todos los pesos de las ruedas en su lugar apropiado en el rin.
        </Card.Text>
        <Card.Text>$
7.400

</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto4} />
      <Card.Body>
        <Card.Title>Bomba De Trasvase A Palanca Aceite</Card.Title>
        <Card.Text>
          Bomba de accionamiento a palanca para trasvasar aceite, diesel y solvente desde tambores o turriles de 200 litros.
        </Card.Text>
        <Card.Text>$
16.500</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto5} />
      <Card.Body>
        <Card.Title>Restaurador De Faros Delanteros</Card.Title>
        <Card.Text>
           El restaurador de faros delanteros Rain-X es mejor para los faros delanteros ligeramente amarillentos o empañados.
        </Card.Text>
        <Card.Text>$
4.890</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto6} />
      <Card.Body>
        <Card.Title>Destraba Cinturon De Seguridad</Card.Title>
        <Card.Text>
          Spray de limpieza sin silicona para la limpieza de los cinturonesy otras partes del tapizado.
        </Card.Text>
        <Card.Text>$
5.740</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto1} />
      <Card.Body>
        <Card.Title>Embudo Flexible Reforzado</Card.Title>
        <Card.Text>
      Embudo diseñado para permitir un vaciado rápido de aceites y otros fluidos sin desbordamiento ni salpicaduras.
        </Card.Text>
        <Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>

        $6.576</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto2} />
      <Card.Body>
        <Card.Title>Extractor Tapon De Carter Imantada</Card.Title>
        <Card.Text>
          Esta herramienta actúa a distancia y evita que el tapón se caiga en la bandeja o depósito de drenaje, al sujetar el tornillo y normalmente la arandela todo el tiempo en el imán.
        </Card.Text>
        <Card.Text>$
        6.576</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white"}}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto3} />
      <Card.Body>
        <Card.Title>Pinza Gomero Cubierta Multi Proposito</Card.Title>
        <Card.Text>
          Se utiliza para colocar todos los pesos de las ruedas en su lugar apropiado en el rin.
        </Card.Text>
        <Card.Text>$
7.400

</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto4} />
      <Card.Body>
        <Card.Title>Bomba De Trasvase A Palanca Aceite</Card.Title>
        <Card.Text>
          Bomba de accionamiento a palanca para trasvasar aceite, diesel y solvente desde tambores o turriles de 200 litros.
        </Card.Text>
        <Card.Text>$
16.500</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>

      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto5} />
      <Card.Body>
        <Card.Title>Restaurador De Faros Delanteros</Card.Title>
        <Card.Text>
           El restaurador de faros delanteros Rain-X es mejor para los faros delanteros ligeramente amarillentos o empañados.
        </Card.Text>
        <Card.Text>$
4.890</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:20,padding:"30px",  background:"#62a07b",color:"white" }}>
      <Card.Img style={{with: "300px",height:"300px"}}variant="top" src={Producto6} />
      <Card.Body>
        <Card.Title>Destraba Cinturon De Seguridad</Card.Title>
        <Card.Text>
          Spray de limpieza sin silicona para la limpieza de los cinturonesy otras partes del tapizado.
        </Card.Text>
        <Card.Text>$
4.890</Card.Text>
      </Card.Body>
    </Card>





    </div>
    </div>
  );
};

export default Productos;
