import { DatePicker, Input, Select } from "antd";
import React, { useState } from "react";
import { CustomSelect } from "../../../components";
import { cpfMask } from "../../../utils";

const Student = () => {
  const [cpf, setCpf] = useState("");
  const genders = [
    { value: "M", description: "Male" },
    { value: "F", description: "Female" },
    { value: "O", description: "Other" },
  ];

  const onChangeCpf = valor => {
    setCpf(cpfMask(valor))
  }
  return (
    <div className="row d-flex">
      <div className="col-md-12">
        <Input id="name" placeholder="Nome" allowClear />
      </div>
      <div className="col-md-12 pt-2">
        <CustomSelect
          listItems={genders}
          fieldValue={"value"}
          fieldDescription={"description"}
          placeholder={"Sexo"}
        />
      </div>
      <div className="col-md-12 pt-2">
        <DatePicker placeholder="Data de nascimento" allowClear />
      </div>
      {/**Fazer componente próprio para texto */}
      {/* <div className="col-md-12 pt-2">
        <Input
          id="name"
          placeholder="CPF"
          allowClear
          value={cpf}
          onChange={valor => onChangeCpf(valor)}
        />
      </div> */}
    </div>
  );
};

export default Student;
