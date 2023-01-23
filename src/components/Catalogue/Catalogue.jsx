import React from "react";
import x6ttacker from "../../imagenes/x6tracker.png";
import x5tacker from "../../imagenes/trackerx5.png";
import x5tackerx1 from "../../imagenes/trackerx5x1.png";
import "./catalogue.css";

function Catalogue() {
  return (
    <div className="dipricontact">
      <div className="containerPri mt-3">
        <div className="container-sm bg-dark">
          {/* <h2 className="h1contact">Para obtener más información o adquirir tu Pi-Vr</h2> */}
          <h3 className="h3catalogo">Datos Técnicos:</h3>
          <div className="textCatalogue d-flex">
            <div>
              <h3 className="h1catalogo">Datos técnicos tracker:</h3>
              <p className="parrafoTra">
                Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~ 2483.5 MHz) *
                (no es compatible con 5Ghz de internet)* Rango de conexion:
                cobertura del router Alimentacion: 5v (voltaje que ofrece la
                entrada USB) sensor: mpu6050 Consumo: 100ma Precision: 1-10 cm
                (se mejora configurando correctamente) Latencia: 15 - 30ms
                Covertura: 360º Duracion de bateria: 8h Dimenciones: 8,5cm x
                6,5cm x 2,9cm Tipo de bateria: 18650 Tiempo de carga: 2h
                (dependiendo cargador) Conexión: micro usb Cargar con 5v usando
                un cable usb a micro usb, puede estar conectado al pc o a un
                cargador de celular
              </p>
            </div>
            <div>
              <h3 className="h1catalogo">Datos técnicos extensor:</h3>
              <p className="parrafoTra">
                Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~ 2483.5 MHz) *
                (no es compatible con 5Ghz de internet)* Rango de conexion:
                cobertura del router Alimentacion: 5v (voltaje que ofrece la
                entrada USB) sensor: mpu6050 Consumo: 100ma Precision: 1-10 cm
                (se mejora configurando correctamente) Latencia: 15 - 30ms
                Covertura: 360º Duracion de bateria: compartida con el tracker
                conectado Dimenciones: 3,5cm x 2,5cm x 1,2cm Conexión: micro usb
              </p>
            </div>
          </div>
          {/* <CardCatalog img={x6ttacker} titleCard={'Pack x6-2 Pi-VR'} price={'95000 ARS'} info={'x6 Pi-VR'}/> */}
          <div className="containerCard">
            <div className="mt-4 containerInfoCard">
              <h3 className="titleCardCat">Pack x6-2 Pi-VR</h3>
              <p className="priceCardCat">95000ARS</p>
              <div className="d-flex">
                <p className="textCardCat">Incluye:</p>
                <ul>
                  <li className="liCardCat">x6 Pi-VR</li>
                  <li className="liCardCat">
                    x6 correas regulables con broche
                  </li>
                  <li className="liCardCat">x2 hebillas de repuesto</li>
                  <li className="liCardCat">x2 cables USB a MicroUSB</li>
                  <li className="liCardCat">x2 Extensores (para pie)</li>
                </ul>
              </div>
            </div>
            <div className="imgCardCat">
              <img src={x6ttacker} alt="img tracker" className="img-fluid" />
            </div>
          </div>

          <div className="containerCard">
            <div className="mt-4 containerInfoCard">
              <h3 className="titleCardCat">Pack x5-3 Pi-Vr</h3>
              <p className="priceCardCat">90000ARS</p>
              <div className="d-flex">
                <p className="textCardCat">Incluye:</p>
                <ul>
                  <li className="liCardCat">x5 Pi-VR</li>
                  <li className="liCardCat">
                    x5 correas regulables con broche
                  </li>
                  <li className="liCardCat">x2 hebillas de repuesto</li>
                  <li className="liCardCat">x2 cables USB a MicroUSB</li>
                  <li className="liCardCat">x2 Extensores (para pie)</li>
                  <li className="liCardCat">x1 Extensores (para pecho)</li>
                </ul>
              </div>
            </div>
            <div className="imgCardCat">
              <img src={x5tacker} alt="img tracker" className="img-fluid" />
            </div>
          </div>

          <div className="containerCard">
            <div className="mt-4 containerInfoCard">
              <h3 className="titleCardCat">Pack x5-1 Pi-Vr</h3>
              <p className="priceCardCat">75000ARS</p>
              <div className="d-flex">
                <p className="textCardCat">Incluye:</p>
                <ul>
                  <li className="liCardCat">x5 Pi-VR</li>
                  <li className="liCardCat">
                    x5 correas regulables con broche
                  </li>
                  <li className="liCardCat">x2 hebillas de repuesto</li>
                  <li className="liCardCat">x2 cables USB a MicroUSB</li>
                  <li className="liCardCat">x1 Extensores (para pecho)</li>
                </ul>
              </div>
            </div>
            <div className="imgCardCat">
              <img src={x5tackerx1} alt="img tracker" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
