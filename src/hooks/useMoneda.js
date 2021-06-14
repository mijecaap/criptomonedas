import React, { Fragment, useState } from "react";
import { Select, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;

const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, updateState] = useState(stateInicial);
  const Seleccionar = () => (
    <Fragment>
      <Title level={2} className="label-one">
        {label}
      </Title>
      <Select
        value={state}
        style={{ width: "100%" }}
        onChange={value => updateState(value)}
      >
        <Option value="">- Selecione -</Option>
        {opciones.map((opcion) => (
          <Option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</Option>
        ))}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state
  return [state, Seleccionar, updateState];
};

export default useMoneda;
