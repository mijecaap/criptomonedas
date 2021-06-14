import React, { useState, useEffect } from "react";
import Cotizacion from "./components/Cotizacion";
import Formulario from "./components/Formulario";
import axios from "axios";
import { Row, Col, Typography } from "antd";
import "./App.less";
import Moneda from "./components/Moneda";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

function App() {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === "") return;
      setCargando(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  return (
    <>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 18, offset: 3 }}>
          <Row>
            <Col xs={24} md={11}>
              <Row align="middle" className="coin-container">
                <Moneda />
              </Row>
            </Col>
            <Col xs={0} md={2}></Col>
            <Col xs={24} md={11}>
              <Title className="title">Cotizador al instante</Title>
              <Formulario
                setMoneda={setMoneda}
                setCriptomoneda={setCriptomoneda}
                resultado={resultado}
                cargando={cargando}
              />
              {cargando ? (
                <Row justify="center">
                  <Spin style={{margin: "50px auto", }} size="large" indicator={<LoadingOutlined spin />} />
                </Row>
              ) : (
                <Cotizacion resultado={resultado} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <div id="calcular"></div>
    </>
  );
}

export default App;
