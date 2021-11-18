import React from "react";
import { FormFiveWrapper } from "./styles/FormFiveWrapper.js";
import { Input } from "../../Common/Input";
export function FormF({
  title,
  onSubmit,
  type,
  placeholder,
  value,
  method,
  icon,
  type2,
  placeholder2,
  value2,
  method2,
  icon2,
  type3,
  placeholder3,
  value3,
  method3,
  icon3,
  type4,
  placeholder4,
  value4,
  method4,
  icon4,
  type5,
  placeholder5,
  value5,
  method5,
  icon5,
  ...props
}) {
  return (
    <FormFiveWrapper>
      <form onSubmit={onSubmit}>
        <h1>Cadastro de {title}</h1>

        <div className="inputsAreaComponent">
          <Input
            type={type}
            placeholder={placeholder}
            value={email}
            onChange={method}
            icon={icon}
          />
        <Input
            type={type2}
            placeholder={placeholder2}
            value={email2}
            onChange={method2}
            icon={icon2}
          />
          <Input
            type={type3}
            placeholder={placeholder3}
            value={email3}
            onChange={method3}
            icon={icon3}
          />
          <Input
            type={type4}
            placeholder={placeholder4}
            value={email4}
            onChange={method4}
            icon={icon4}
          />
          <Input
            type={type5}
            placeholder={placeholder5}
            value={email5}
            onChange={method5}
            icon={icon5}
          />
        </div>
      </form>
    </FormFiveWrapper>
  );
}
