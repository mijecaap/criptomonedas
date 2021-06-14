import React, { Fragment, useState } from "react";
import { Select, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;

const useCriptomoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, updateState] = useState(stateInicial);

  const SeleccionarCriptomoneda = () => (
    <Fragment>
      <Title level={2} className="label-two">
        {label}
      </Title>
      <Select
        value={state}
        style={{ width: "100%" }}
        onChange={value => updateState(value)}
      >
        <Option value="">- Selecione -</Option>
        {opciones.map((opcion) => (
          <Option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</Option>
        ))}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state
  return [state, SeleccionarCriptomoneda, updateState];
};

export default useCriptomoneda;
