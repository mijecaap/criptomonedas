import React, { useEffect, useState } from "react";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";
import { Card, Col, Row } from "antd";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [listcripto, setListcripto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "PEN", nombre: "Sol (moneda del Perú)" },
    { codigo: "USD", nombre: "Dólar de Estados Unidos" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  const [moneda, SeleccionarMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);

  const [criptomoneda, SeleccionarCriptomoneda] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listcripto
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListcripto(resultado.data.Data);
    };
    consultarApi();
  }, []);

  const cotizarMoneda = () => {
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }

    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      <Card
        style={{
          borderWidth: 1,
          borderColor: "white",
          backgroundColor: "inherit",
          marginBottom: "1rem",
        }}
      >
        <Row align="bottom">
          <Col xs={20}>
            <SeleccionarMoneda />
            <SeleccionarCriptomoneda />
          </Col>
          <Col xs={1}></Col>
          <Col xs={3}>
            <Row justify="center">
              <Col>
                <Tooltip title="Calcular">
                  <Button
                    size="large"
                    type="primary"
                    shape="circle"
                    onClick={cotizarMoneda}
                    href="#calcular"
                    icon={<SearchOutlined />}
                  />
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
    </form>
  );
};

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptomoneda: PropTypes.func.isRequired,
};

export default Formulario;
