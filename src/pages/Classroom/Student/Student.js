import { Button, DatePicker } from "antd";
import React, { useState } from "react";
import { CustomSelect, TextField } from "../../../components";
import { cpfMask } from "../../../utils";

const Student = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [filiacao1, setFiliacao1] = useState("");
  const [filiacao2, setFiliacao2] = useState("");
  const genders = [
    { value: "M", description: "Male" },
    { value: "F", description: "Female" },
    { value: "O", description: "Other" },
  ];

  const onChangeCpf = (valor) => {
    setCpf(cpfMask(valor));
  };

  const onConfirm = () => {};

  const onCancel = () => {};

  return (
    <div>
      <div className="col-md-12 p-0 d-flex justify-content-end">
        <Button  onClick={onCancel}>
          Cancelar
        </Button>
        <Button className="ml-2" type="primary" onClick={onConfirm}>
          Confirmar
        </Button>
      </div>
      <div className="row d-flex">
        <div className="col-md-12 pt-2">
          <TextField
            placeholder="Nome"
            onChange={(e) => setNome(e)}
            name="nome"
            value={nome}
          />
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
          <DatePicker
            style={{ width: "200px" }}
            placeholder="Data de nascimento"
            allowClear
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e)}
          />
        </div>
        <div className="col-md-12 pt-2">
          <TextField
            placeholder="CPF"
            onChange={onChangeCpf}
            name="cpf"
            value={cpf}
          />
        </div>
        <div className="col-md-12 pt-2">
          <TextField
            placeholder="Filiação 1"
            onChange={(e) => setFiliacao1(e)}
            name="filiacao1"
            value={filiacao1}
          />
        </div>
        <div className="col-md-12 pt-2">
          <TextField
            placeholder="Filiação 2"
            onChange={(e) => setFiliacao2(e)}
            name="filiacao2"
            value={filiacao2}
          />
        </div>
      </div>
    </div>
  );
};

export default Student;
