import React from "react";
import { Col, Row, Statistic } from "antd";
import PropTypes from "prop-types";

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <>
      <Row style={{ marginTop: "2rem", marginBottom: "1rem" }} gutter={5}>
        <Col xs={12} md={{ span: 8, offset: 3 }}>
          <Row justify="start">
            <Statistic title="Precio:" value={resultado.PRICE} />
          </Row>
        </Col>
        <Col xs={12} md={{ span: 8, offset: 3 }}>
          <Row justify="start">
            <Statistic
              title="Precio más alto del día:"
              value={resultado.HIGHDAY}
            />
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2rem" }} gutter={5}>
        <Col xs={12} md={{ span: 8, offset: 3 }}>
          <Row justify="start">
            <Statistic
              title="Precio más bajo del día:"
              value={resultado.LOWDAY}
            />
          </Row>
        </Col>
        <Col xs={12} md={{ span: 8, offset: 3 }}>
          <Row justify="start">
            <Statistic
              title="Última actualización:"
              value={resultado.LASTUPDATE}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Cotizacion;
