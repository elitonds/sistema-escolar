import { Button, DatePicker } from "antd";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import { CustomSelect, TextField } from "../../../components";
import { cpfMask } from "../../../utils";
import * as Yup from "yup";

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

  const initialValues = {};

  const onChangeCpf = (valor) => {
    setCpf(cpfMask(valor));
  };

  const onConfirm = () => {};

  const onCancel = () => {};

  const onValidate = (values) => {};

  const onSumbmitForm = (values) => {};

  const [validations, setValidtions] = useState({
    name: Yup.string().required("Informe o nome do estudante"),
    gender: Yup.string().required("Informe o gênero do estudante"),
    cpf: Yup.string().required("Informe o cpf do estudante"),
    filiacao1: Yup.string().required("Informe a filiação 1 do estudante"),
    filiacao2: Yup.string().required("Informe a filiação 2 do estudante"),
  });

  return (
    <div>
      <div className="col-md-12 p-0 d-flex justify-content-end">
        <Button onClick={onCancel}>Cancelar</Button>
        <Button className="ml-2" type="primary" onClick={onConfirm}>
          Confirmar
        </Button>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={(values) => onSumbmitForm(values)}
        validateOnChange
        validateOnBlur
        validate={(values) => onValidate(values)}
      >
        {(form) => (
          <Form className="p-0 col-md-12">
            <div className="row d-flex">
              <div className="col-md-12 pt-2">
                <TextField
                  id="student-name"
                  placeholder="Nome"
                  onChange={(e) => setNome(e)}
                  name="name"
                  value={nome}
                  form={form}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Student;
